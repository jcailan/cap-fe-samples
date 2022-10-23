sap.ui.define([
	"sap/fe/test/builder/MdcTableBuilder"
], function(TableBuilder) {
	'use strict';

	TableBuilder.prototype.hasNumberOfRows = function(iNumberOfRows) {
		return this.has(function(oTable) {
			var oRowBinding = oTable.getBinding("items"),
				// when having an overlay, the table is dirty and the rows do not reflect the actual table state
				bHasOverlay = TableBuilder.Matchers.overlay(true)(oTable);
			return (
				(oRowBinding &&
					!bHasOverlay &&
					(iNumberOfRows === undefined ? oRowBinding.getLength() !== 0 : oRowBinding.getLength() === iNumberOfRows)) ||
				((!oRowBinding || bHasOverlay) && iNumberOfRows === 0)
			);
		});
	};

	return TableBuilder;
});