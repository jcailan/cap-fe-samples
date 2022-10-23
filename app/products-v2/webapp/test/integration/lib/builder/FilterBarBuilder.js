sap.ui.define([
	"sap/fe/test/builder/MdcFilterBarBuilder"
], function(FilterBarBuilder) {
	'use strict';

	FilterBarBuilder.prototype.doSearch = function() {
		return this.doPress("btnGo");
	};

	return FilterBarBuilder;
});