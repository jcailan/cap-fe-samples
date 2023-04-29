sap.ui.define([
	"sap/ui/test/opaQunit"
], function(opaTest) {
	"use strict";

	var Journey = {
		run: function() {
			QUnit.module("First journey");

			opaTest("Start application", function(Given, When, Then) {
				Given.iStartMyApp();

				Then.onTheProductsList.iSeeThisPage();

			});


			opaTest("Navigate to ObjectPage", function(Given, When, Then) {
				// Note: this test will fail if the ListReport page doesn't show any data
				When.onTheProductsList.onFilterBar().iExecuteSearch();
				Then.onTheProductsList.onTable().iCheckRows();

				When.onTheProductsList.onTable().iPressRow(0);
				Then.onTheProductsObjectPage.iSeeThisPage();

			});

			opaTest("Teardown", function(Given, When, Then) {
				// Cleanup
				Given.iTearDownMyApp();
			});
		}
	};

	return Journey;
});