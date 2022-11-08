sap.ui.require(
	[
		'sap/fe/test/JourneyRunner',
		'com/jcailan/custom/test/integration/FirstJourney',
		'com/jcailan/custom/test/integration/pages/EntryPage'
	],
	function(JourneyRunner, opaJourney, EntryPage) {
		'use strict';
		var JourneyRunner = new JourneyRunner({
			// start index.html in web folder
			launchUrl: sap.ui.require.toUrl('com/jcailan/custom') + '/test/index.html'
		});


		JourneyRunner.run(
			{
				pages: {
					onTheEntryPage: EntryPage
				}
			},
			opaJourney.run
		);
	}
);