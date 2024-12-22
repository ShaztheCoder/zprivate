export default function CreateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/RiskMobile/Services/RiskManagementTwoService.service').isDraftEnabled('Risks')) {
        return clientAPI.executeAction({
            'Name': '/RiskMobile/Actions/RiskManagementTwoService/Risks/Risks_CreateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            let newEntity = JSON.parse(result.data);
            return clientAPI.executeAction({
                'Name': '/RiskMobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Risks',
                        'ReadLink': newEntity['@odata.readLink']
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/RiskMobile/Actions/RiskManagementTwoService/Risks/Risks_CreateEntity.action');
    }
}