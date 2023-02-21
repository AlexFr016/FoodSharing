import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type { PartnerRequests, PartnerRequest } from './partnerRequestsType';

const initialState: PartnerRequests = {
  partnerRequests: [],
};

const partnersRequestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    setRequests: (state, action: PayloadAction<PartnerRequests>) => action.payload,
    addPartnerRequest: (state, action: PayloadAction<PartnerRequest>) => {
      state.partnerRequests.unshift(action.payload);
    },
    delPartnerRequest: (state, action: PayloadAction<PartnerRequest['id']>) => {
      state.partnerRequests.filter((request) => request.id !== action.payload);
    },
  },
});

export const { setRequests } = partnersRequestsSlice.actions;

export default partnersRequestsSlice.reducer;

export const getPartnerRequests = (): AppThunk => (dispatch) => {
  axios<PartnerRequests>('/api/requests')
    .then((res) => dispatch(setRequests(res.data)))
    .catch(console.log);
};
