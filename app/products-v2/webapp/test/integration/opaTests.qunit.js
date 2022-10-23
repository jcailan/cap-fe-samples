sap.ui.require(
	[
		'sap/fe/test/JourneyRunner',
		'com/jcailan/v2/products/test/integration/FirstJourney',
		'com/jcailan/v2/products/test/integration/pages/ProductsList',
		'com/jcailan/v2/products/test/integration/pages/ProductsObjectPage',
		'com/jcailan/v2/products/test/integration/pages/ReviewsObjectPage'
	],
	function(JourneyRunner, opaJourney, ProductsList, ProductsObjectPage, ReviewsObjectPage) {
		'use strict';
		var JourneyRunner = new JourneyRunner({
			// start index.html in web folder
			launchUrl: sap.ui.require.toUrl('com/jcailan/v2/products') + '/test/index.html'
		});


		JourneyRunner.run(
			{
				pages: {
					onTheProductsList: ProductsList,
					onTheProductsObjectPage: ProductsObjectPage,
					onTheReviewsObjectPage: ReviewsObjectPage
				}
			},
			opaJourney.run
		);
	}
);