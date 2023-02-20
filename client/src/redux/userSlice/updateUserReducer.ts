import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { BackendUserType } from './userType';
import type { AppThunk } from '../hooks';

const initialState: BackendUserType = {
  id: 0,
  firstName: '',
  lastName: '',
  secondName: '',
  email: '',
  phone: '',
  active: false,
  pathPhoto: '',
  roleid: 0,
  companyName: '',
  description: '',
  titleLogoPath: '',
};

const updateUserSlice = createSlice({
  name: 'updateUser',
  initialState,
  reducers: {
    // updateUser: (state, action: PayloadAction<BackendUserType>) => {
    //   state;
    // },
  },
});

// export const { updateUser } = updateUserSlice.actions;
export default updateUserSlice.reducer;

// export const loadOneUser =
//   (input: string): AppThunk =>
//   (dispatch) => {
//     axios<BackendUserType>(`/api/user`, { input })
//       .then((res) => dispatch(updateUser(res.data)))
//       .catch(console.log);
//   };

// export const updatePartner =
//   (id: number): AppThunk =>
//   (dispatch) => {
//     axios
//       .put<BackendUserType>(`/api/user/${id}`)
//       .then((res) => dispatch(updateUser(res.data)))
//       .catch(console.log);
//   };
