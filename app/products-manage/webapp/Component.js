sap.ui.define([
	"sap/fe/core/AppComponent",
	"sap/ui/core/routing/HashChanger"
], function(Component, HashChanger) {
	"use strict";

	return Component.extend("com.jcailan.products.manage.Component", {
		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app
		 * and calls the init method once. In this function, the FLP and device models are
		 * set and the router is initialized.
		 *
		 * @public
		 * @override
		 */
		init: function() {
			// Get parameters passed from cross navigation
			var oComponentData = this.getComponentData();

			// Check if there is a parameter passed.
			if (oComponentData && oComponentData.startupParameters
				&& oComponentData.startupParameters.ID && oComponentData.startupParameters.ID[0]) {
				// Go to the detailed object page of the app.
				var oHashChangerInstance = HashChanger.getInstance(),
					sId = oComponentData.startupParameters.ID[0],
					sHash = "Products(ID=" + sId + ",IsActiveEntity=true)";
				oHashChangerInstance.replaceHash(sHash);
			}

			// call the base component's init function
			Component.prototype.init.apply(this, arguments);
		}
	});
});