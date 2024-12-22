using { RiskManage as my } from '../db/schema.cds';

using { api_sandbox.A_BusinessPartner } from './external/api_sandbox';

@path : '/service/RiskManagementTwoService'
service RiskManagementTwoService
{
    annotate Mitigations with @restrict :
    [
        { grant : [ '*' ], to : [ 'RiskViewer' ] },
        { grant : [ '*' ], to : [ 'RiskManager' ] }
    ];
//h
    annotate Risks with @restrict :
    [
        { grant : [ '*' ], to : [ 'RiskManager' ] },
        { grant : [ '*' ], to : [ 'RiskViewer' ] }
    ];

    entity A_BusinessPartner1 as
        projection on A_BusinessPartner
        {
            BusinessPartner,
            Customer,
            Supplier,
            BusinessPartnerCategory,
            BusinessPartnerFullName,
            BusinessPartnerIsBlocked
        };

    @odata.draft.enabled
    entity Risks as
        projection on my.Risks;

    @odata.draft.enabled
    entity Mitigations as
        projection on my.Mitigations;
}

annotate RiskManagementTwoService with @requires :
[
    'authenticated-user',
    'RiskViewer',
    'RiskManager'
];
