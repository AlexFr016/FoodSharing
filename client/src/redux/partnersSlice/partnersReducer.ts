import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { BackendUserType, PartnersSliceState } from '../userSlice/userType';
import type { AppThunk } from '../hooks';

const initialState: PartnersSliceState = {
  partners: [],
};

const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    setPartners: (state, action: PayloadAction<BackendUserType[]>) => {
      state.partners = action.payload;
    },
    setOnePartner: (state, action: PayloadAction<BackendUserType['id']>) => {
      state.partners = state.partners.filter((partner) => partner.id === action.payload);
    },
  },
});

export const { setPartners, setOnePartner } = partnersSlice.actions;
export default partnersSlice.reducer;

export const loadPartners = (): AppThunk => (dispatch) => {
  axios<BackendUserType[]>('/partners')
    .then((res) => dispatch(setPartners(res.data)))
    .catch(console.log);
};

export const loadOnePartner =
  (id: number): AppThunk =>
  (dispatch) => {
    axios<BackendUserType>(`/partners/${id}`)
      .then((res) => dispatch(setOnePartner(res.data.id)))
      .catch(console.log);
  };
