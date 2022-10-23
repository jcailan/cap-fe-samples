sap.ui.define([
	"sap/ui/test/OpaBuilder",
	"sap/fe/test/Utils",
	"./TemplatePage"
], function(OpaBuilder, Utils, TemplatePage) {
	"use strict";

	function ListReport(oPageDefinition, aInAdditionalPageDefinitions) {
		var sAppId = oPageDefinition.appId,
			sComponentId = oPageDefinition.componentId,
			sViewName = "sap.suite.ui.generic.template.ListReport.view.ListReport",
			sViewId = sAppId + "::" + sViewName + "::" + sComponentId,
			sTableId = sViewId + "--responsiveTable",
			sFilterBarId = sViewId + "--listReportFilter",
			aAdditionalPageDefinitions = Array.isArray(arguments[1]) ? arguments[1] : Array.prototype.slice.call(arguments, 1);

		return TemplatePage.apply(
			TemplatePage,
			[
				sViewId,
				{
					actions: {
						onTable: function() {
							return {
								iPressRow: function(iRow) {
									return OpaBuilder.create(this)
										.hasId(sTableId)
										.has(function(oTable) {
											return oTable.getItems()[iRow];
										})
										.doPress()
										.description(Utils.formatMessage("Table row {0} selected", iRow))
										.execute();
								}.bind(this)
							};
						}.bind(this),
						onFilterBar: function() {
							return {
								iExecuteSearch: function() {
									return OpaBuilder.create(this)
										.hasId(sFilterBarId + "-btnGo")
										.doPress()
										.description("Executing search on filter bar")
										.execute();
								}.bind(this)
							};
						}
					},
					assertions: {}
				}
			].concat(aAdditionalPageDefinitions)
		);
	}

	return ListReport;
});