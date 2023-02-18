import type { UserCompany } from '../searchRequestsSlice/searchRequestsType';

export type FavoriteRequest = {
  id: number;
  title: string;
  lifeTimeStart: Date;
  lifeTimeEnd: Date;
  description: string;
  partnerid: number;
  statusid: number;
  User: UserCompany;
};

export type FavoriteRequestSlice = {
  favorites: FavoriteRequest[];
};
