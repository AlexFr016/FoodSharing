// /* eslint-disable */
// /* @ts-nocheck */
// import { call, put, takeEvery, takeLatest, delay } from 'redux-saga/effects';
// import axios from 'axios';
// import { oneDog } from './AnimalSlice/AnimalSlice';
// //import Api from '...';

// const axiosCall = () => axios('https://dog.ceo/api/breeds/image/random');

// // worker Saga: will be fired on USER_FETCH_REQUESTED actions
// function* fetchOneDog(action) {
//   try {
//     //yield delay(900);
//     const res = yield call(axiosCall);
//     yield put(oneDog(res.data));
//   } catch (e) {
//     yield put({ type: 'GET_ONE_DOG', message: e.message });
//   }
// }

// /*
//   Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
//   Allows concurrent fetches of user.
// */
// function* mySagaWatcher() {
//   yield takeEvery('GET_ONE_DOG', fetchOneDog);
// }

// /*
//   Alternatively you may use takeLatest.

//   Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
//   dispatched while a fetch is already pending, that pending fetch is cancelled
//   and only the latest one will be run.
// */
// // function* mySaga() {
// //   yield takeLatest('USER_FETCH_REQUESTED', fetchUser);
// // }

// export default mySagaWatcher;
