sap.ui.define(['sap/fe/test/TemplatePage'], function(TemplatePage) {
	'use strict';

	var CustomPageDefinitions = {
		actions: {},
		assertions: {}
	};

	return new TemplatePage(
		'com.jcailan.custom::EntryPage',
		CustomPageDefinitions
	);
});