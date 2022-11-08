sap.ui.define([
	"sap/fe/core/PageController"
], function(PageController) {
	"use strict";

	return PageController.extend("com.jcailan.custom.controller.DetailPage", {

		// Note that you always have to call the onInit of PageController
		// whenever you create your own initialization logic.

		onInit: function() {
			PageController.prototype.onInit.apply(this);
		}

	});
});