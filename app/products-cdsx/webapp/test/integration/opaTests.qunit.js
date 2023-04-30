sap.ui.require(
	[
		'sap/fe/test/JourneyRunner',
		'com/jcailan/remote/cdsx/products/test/integration/FirstJourney',
		'com/jcailan/remote/cdsx/products/test/integration/pages/ProductsList',
		'com/jcailan/remote/cdsx/products/test/integration/pages/ProductsObjectPage'
	],
	function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage) {
		'use strict';
		var JourneyRunner = new JourneyRunner({
			// start index.html in web folder
			launchUrl: sap.ui.require.toUrl('com/jcailan/remote/cdsx/products') + '/test/index.html'
		});


		JourneyRunner.run(
			{
				pages: {
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage
				}
			},
			opaJourney.run
		);
	}
);