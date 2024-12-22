export default function CreateRelatedEntity(clientAPI) {
    if (clientAPI.getODataProvider('/RiskMobile/Services/RiskManagementTwoService.service').isDraftEnabled('Mitigations')) {
        let readLink = clientAPI.binding['@odata.readLink'];
        return clientAPI.executeAction({
            'Name': '/RiskMobile/Actions/RiskManagementTwoService/Mitigations/Mitigations_CreateRisks.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/RiskMobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Mitigations',
                        'ReadLink': readLink
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/RiskMobile/Actions/RiskManagementTwoService/Mitigations/Mitigations_CreateRisks.action');
    }
}