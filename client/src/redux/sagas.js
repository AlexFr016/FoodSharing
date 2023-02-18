/* eslint-disable */
/* @ts-nocheck */
import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';
import { setRequests } from './searchRequestsSlice/searchRequestsSlice';

//import Api from '...';

const axiosCall = (input) => axios.post('/api/searchRequests', { input });

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchRequestsOnProductName(action) {
  try {
    yield delay(900);
    const res = yield call(axiosCall, action.payload);
    yield put(setRequests(res.data));
  } catch (e) {
    yield put({ type: 'SEARCH_REQUESTS_ON_PRODUCT_NAME', message: e.message });
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* searchRequestsSagaWatcher() {
  yield takeLatest('SEARCH_REQUESTS_ON_PRODUCT_NAME', fetchRequestsOnProductName);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
// function* mySaga() {
//   yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
// }

export default searchRequestsSagaWatcher;
