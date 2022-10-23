sap.ui.define([
	"sap/ui/test/Opa5",
	"sap/fe/test/Utils",
	"sap/ui/test/actions/Press",
	"./TemplatePage"
], function(Opa5, Utils, Press, TemplatePage) {
	"use strict";

	function getTableId(sIconTabProperty) {
		return "fe::table::" + sIconTabProperty + "::LineItem";
	}

	function ListReport(oPageDefinition, aInAdditionalPageDefinitions) {
		var sAppId = oPageDefinition.appId,
			sComponentId = oPageDefinition.componentId,
			ViewId = sAppId + "::sap.suite.ui.generic.template.ListReport.view.ListReport::" + sComponentId,
			sViewName = "sap.suite.ui.generic.template.ListReport.view.ListReport",
			SingleTableId = ViewId + "--responsiveTable",
			FilterBarId = "listReportFilter",
			aAdditionalPageDefinitions = Array.isArray(arguments[1]) ? arguments[1] : Array.prototype.slice.call(arguments, 1);

		return TemplatePage.apply(
			TemplatePage,
			[
				ViewId,
				{
					actions: {
						onTable: function(vTableIdentifier) {
							var sTableId;
							if (vTableIdentifier) {
								sTableId = !Utils.isOfType(vTableIdentifier, String) ?
									getTableId(vTableIdentifier.property) :
									vTableIdentifier;
							} else {
								sTableId = SingleTableId;
							}
							return this._onTable({
								id: sTableId
							});
						},
						onFilterBar: function() {
							return this._onFilterBar({
								id: FilterBarId
							});
						},
						iPressRow: function(iRow) {
							return this.waitFor({
								controlType: "sap.m.Table",
								matchers: function(oTable) {
									return oTable.getItems()[iRow];
								},
								actions: new Press(),
								success: function() {
									Opa5.assert.ok(true, `Pressing row ${iRow} of List Report table`);
								},
								errorMessage: "Did not find the table row"
							});
						}
					},
					assertions: {
						onTable: function(vTableIdentifier) {
							if (!vTableIdentifier) {
								vTableIdentifier = {
									id: SingleTableId
								};
							} else {
								var sTableProperty = !Utils.isOfType(vTableIdentifier, String) ?
									vTableIdentifier.property :
									vTableIdentifier;
								vTableIdentifier = {
									id: getTableId(sTableProperty)
								};
							}
							return this._onTable(vTableIdentifier);
						},
						onFilterBar: function() {
							return this._onFilterBar({
								id: FilterBarId
							});
						}
					}
				}
			].concat(aAdditionalPageDefinitions)
		);
	}

	return ListReport;
});