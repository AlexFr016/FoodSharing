import type { UserCompany } from '../searchRequestsSlice/searchRequestsType';

export type PartnerRequests = {
  partnerRequests: PartnerRequest[];
};

export type PartnerRequest = {
  id: number;
  title: string;
  lifeTimeStart: Date;
  lifeTimeEnd: Date;
  description: string;
  partnerid: number;
  statusid: number;
  User: UserCompany;
};
