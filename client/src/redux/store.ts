import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import favoritesRequestsReducer from './favoritesRequestsSlice/favoritesRequestsSlice';
import { filterRequestsSagaWatcher, searchRequestsSagaWatcher } from './sagas';
import searchRequestsReducer from './searchRequestsSlice/searchRequestsSlice';
import requestReducer from './singleRequestSlice/singleRequestSlice';
import userReducer from './userSlice/userReducer';
import partnersReducer from './partnersSlice/partnersReducer';
import onePartnerReducer from './partnersSlice/onePartnerReducer';
import updateUserReducer from './userSlice/updateUserReducer';
// import createSagaMiddleware from 'redux-saga';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    partners: partnersReducer,
    partner: onePartnerReducer,
    searchRequests: searchRequestsReducer,
    favoritesRequests: favoritesRequestsReducer,
    request: requestReducer,
    updateUser: updateUserReducer,
  },

  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), sagaMiddleware],
});

// then run the saga
sagaMiddleware.run(searchRequestsSagaWatcher);
sagaMiddleware.run(filterRequestsSagaWatcher);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
