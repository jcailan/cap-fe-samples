sap.ui.define([], function() {
	"use strict";

	var sNamespace = "com.jcailan.v2.products.form",
		sTemplate = "::sap.suite.ui.generic.template.ObjectPage.view.Details::",
		sAnnotation = "--com.sap.vocabularies.UI.v1.FieldGroup::GeneralInformation::",
		sEntity = "Products",
		sField = "::Field";

	return {

		/**
		 * Lifecycle method of the control that gets executed during initialization.
		 *
		 * @public
		 */
		onInit: function() {
			var oComponentData = this.getOwnerComponent().getAppComponent().getComponentData(),
				aKeys = Object.keys(oComponentData.startupParameters);

			aKeys.forEach(function(sKey) {
				this._setFieldValue(sKey, oComponentData.startupParameters[sKey][0]);
			}.bind(this));

			this.getOwnerComponent()
				.getModel()
				.attachEvent("requestCompleted", this._navToChangeNotification.bind(this));
		},

		_setFieldValue: function(sFieldName, sValue) {
			var sId = sNamespace + sTemplate + sEntity + sAnnotation + sFieldName + sField,
				oField = this.getView().byId(sId);
			oField.attachEventOnce("innerControlsCreated", function() {
				oField.setValue(sValue);
			});
		},

		_navToChangeNotification: function(oEvent) {
			var oParameters = oEvent.getParameters();

			if (oParameters.method === "POST" && oParameters.success) {
				var oResponse = JSON.parse(oParameters.response.responseText);
				this._navTo("Products", "manage", { ID: oResponse.d.ID });
			}
		},

		/**
		 * Cross app navigation to another app with semantic object, action and parameters.
		 *
		 * @public
		 * @param {string} sSemanticObject - The semantic of the app.
		 * @param {string} sAction - The action of the app.
		 * @param {object} oParameter - The parameters.
		 */
		_navTo: function(sSemanticObject, sAction, oParameter) {
			var oCrossAppNavigator = sap.ushell.Container.getService("CrossApplicationNavigation"),
				sHash = oCrossAppNavigator && oCrossAppNavigator.hrefForExternal({
					target: {
						semanticObject: sSemanticObject,
						action: sAction
					},
					params: oParameter
				}) || "";

			oCrossAppNavigator.toExternal({
				target: {
					shellHash: sHash
				}
			});
		}

	};
});