sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagementtwo/riskmananagementtwo/test/integration/FirstJourney',
		'riskmanagementtwo/riskmananagementtwo/test/integration/pages/RisksList',
		'riskmanagementtwo/riskmananagementtwo/test/integration/pages/RisksObjectPage'
    ],
    function(JourneyRunner, opaJourney, RisksList, RisksObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagementtwo/riskmananagementtwo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRisksList: RisksList,
					onTheRisksObjectPage: RisksObjectPage
                }
            },
            opaJourney.run
        );
    }
);