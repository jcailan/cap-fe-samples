sap.ui.define(['../lib/ListReport'], function(ListReport) {
	'use strict';

	var CustomPageDefinitions = {
		actions: {},
		assertions: {}
	};

	return new ListReport(
		{
			appId: 'com.jcailan.v2.products',
			componentId: 'Products',
			entitySet: 'Products'
		},
		CustomPageDefinitions
	);
});