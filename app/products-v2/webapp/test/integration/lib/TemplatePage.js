sap.ui.define([
	"sap/ui/test/OpaBuilder",
	"sap/fe/test/Utils",
	"./builder/TableBuilder",
	"sap/fe/test/api/TableActions",
	"sap/fe/test/api/TableAssertions",
	"./builder/FilterBarBuilder",
	"sap/fe/test/api/FilterBarActions"
], function(OpaBuilder, Utils, TableBuilder, TableActions, TableAssertions, FilterBarBuilder, FilterBarActions) {
	"use strict";

	function _getTableBuilder(vOpaInstance, vTableIdentifier) {
		var oTableBuilder = TableBuilder.create(vOpaInstance);
		if (Utils.isOfType(vTableIdentifier, String)) {
			oTableBuilder.hasProperties({
				header: vTableIdentifier
			});
		} else {
			oTableBuilder.hasId(vTableIdentifier.id);
		}
		return oTableBuilder;
	}

	function _getFilterBarBuilder(vOpaInstance, vFilterBarIdentifier) {
		return FilterBarBuilder.create(vOpaInstance).hasId(vFilterBarIdentifier.id);
	}

	function TemplatePage(vViewId, aAdditionalPageDefinitions) {
		var sViewId = vViewId,
			aAdditionalPages = Array.prototype.slice.call(arguments, 1);

		return Utils.mergeObjects.apply(
			Utils,
			[{
				viewId: sViewId,
				actions: Utils.mergeObjects({
					_onTable: function(vTableIdentifier) {
						return new TableActions(_getTableBuilder(this, vTableIdentifier), vTableIdentifier);
					},
					_onFilterBar: function(vFilterBarIdentifier) {
						return new FilterBarActions(_getFilterBarBuilder(this, vFilterBarIdentifier), vFilterBarIdentifier);
					}
				}),
				assertions: Utils.mergeObjects({
					_onTable: function(vTableIdentifier) {
						return new TableAssertions(_getTableBuilder(this, vTableIdentifier), vTableIdentifier);
					},
					_onFilterBar: function(vFilterBarIdentifier) {
						return new FilterBarActions(_getFilterBarBuilder(this, vFilterBarIdentifier), vFilterBarIdentifier);
					},
					iSeeThisPage: function() {
						return OpaBuilder.create(this)
							.hasId(sViewId)
							.do(
								function(oControl) {
									//storing the placeholder object
									this.oPlaceholder = oControl;
								}.bind(this)
							)
							.viewId(null)
							.viewName(null)
							.description(Utils.formatMessage("Seeing the page '{0}'", sViewId))
							.execute();
					}
				})
			}].concat(aAdditionalPages)
		);
	}

	return TemplatePage;
});