sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
	'use strict';

	var CustomPageDefinitions = {
		actions: {},
		assertions: {}
	};

	return new ObjectPage(
		{
			appId: 'com.jcailan.remote.cdsx.products',
			componentId: 'ProductsObjectPage',
			entitySet: 'Products'
		},
		CustomPageDefinitions
	);
});