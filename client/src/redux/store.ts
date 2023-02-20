import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice/userReducer';
import partnersReducer from './partnersSlice/partnersReducer';
// import createSagaMiddleware from 'redux-saga';

// create the saga middleware
// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    partners: partnersReducer,
  },

  // middleware: (getDefaultMiddleware) => [
  //   ...getDefaultMiddleware(),
  //   sagaMiddleware,
  // ],
});

// then run the saga
// sagaMiddleware.run(mySagaWather);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
