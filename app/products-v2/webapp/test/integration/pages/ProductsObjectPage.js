sap.ui.define(['../lib/ObjectPage'], function(ObjectPage) {
	'use strict';

	var CustomPageDefinitions = {
		actions: {},
		assertions: {}
	};

	return new ObjectPage(
		{
			appId: 'com.jcailan.v2.products',
			componentId: 'Products',
			entitySet: 'Products'
		},
		CustomPageDefinitions
	);
});