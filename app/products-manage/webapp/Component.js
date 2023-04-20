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
			var oComponentData = this.getComponentData(),
				aStartupParams = oComponentData.startupParameters;

			// Check if there is a parameter passed.
			if (aStartupParams && aStartupParams.ID && aStartupParams.ID[0]) {
				// Go to the detailed object page of the app.
				var oHashChangerInstance = HashChanger.getInstance(),
					sHash = "Products(ID=" + aStartupParams.ID[0] + ",IsActiveEntity=true)";
				oHashChangerInstance.replaceHash(sHash);
			}

			// call the base component's init function
			Component.prototype.init.apply(this, arguments);
		}
	});
});