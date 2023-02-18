import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type { FavoriteRequest, FavoriteRequestSlice } from './favoritesRequestsType';

const initialState: FavoriteRequestSlice = {
  favorites: [],
};

export const favoritesRequestsSlice = createSlice({
  name: 'favoritesRequests',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<FavoriteRequest>) => {
      if (!state.favorites.map((favRequest) => favRequest.id).includes(action.payload.id)) {
        state.favorites.unshift(action.payload);
      }
    },
    delFavorite: (state, action: PayloadAction<FavoriteRequest['id']>) => ({
      ...state,
      favorites: state.favorites.filter((favRequest) => favRequest.id !== action.payload),
    }),
  },
});

export const { addFavorite, delFavorite } = favoritesRequestsSlice.actions;

export const addFavoriteJoke =
  (request: FavoriteRequest): AppThunk =>
  (dispatch) => {
    dispatch(addFavorite(request));
  };

export const delFavoriteJoke =
  (id: FavoriteRequest['id']): AppThunk =>
  (dispatch) => {
    dispatch(delFavorite(id));
  };

export default favoritesRequestsSlice.reducer;
