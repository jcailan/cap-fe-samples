sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
	'use strict';

	var CustomPageDefinitions = {
		actions: {},
		assertions: {}
	};

	return new ListReport(
		{
			appId: 'com.jcailan.remote.cdsx.products',
			componentId: 'ProductsList',
			entitySet: 'Products'
		},
		CustomPageDefinitions
	);
});