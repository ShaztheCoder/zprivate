namespace RiskManage;

using { api_sandbox } from '../srv/external/api_sandbox.cds';

using
{
    Country,
    Currency,
    Language,
    User,
    cuid,
    managed,
    temporal
}
from '@sap/cds/common';

using {
	api_sandbox.A_BusinessPartner
} from '../srv/external/api_sandbox';



entity Risks 
{
    key ID : UUID
        @Core.Computed;
    miti : Association to one Mitigations;
    title : String(100);
    prio : String(5);
    descr : String(100);
    impact : Integer;
    criticality : Integer;
    supplier : Association to one api_sandbox.A_BusinessPartner;
}

entity Mitigations 
{
    key ID : UUID
        @Core.Computed;
    risks : Association to many Risks on risks.miti = $self;
    createdAt: String(100);
    createdBy: String(100);
    description : String(100);
    owner : String(100);
    timeline : String(100);
}