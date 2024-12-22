export default function Cancel(clientAPI) {
    if (clientAPI.getODataProvider('/RiskMobile/Services/RiskManagementTwoService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/RiskMobile/Actions/DraftDiscardEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risks'
                },
                'OnSuccess': '/RiskMobile/Actions/CloseModalPage_Cancel.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RiskMobile/Actions/CloseModalPage_Cancel.action');
    }
}