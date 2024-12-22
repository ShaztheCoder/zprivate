export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/RiskMobile/Services/RiskManagementTwoService.service').isDraftEnabled('Mitigations')) {
        return clientAPI.executeAction({
            'Name': '/RiskMobile/Actions/RiskManagementTwoService/Mitigations/Mitigations_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/RiskMobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Mitigations'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/RiskMobile/Actions/RiskManagementTwoService/Mitigations/Mitigations_UpdateEntity.action');
    }
}