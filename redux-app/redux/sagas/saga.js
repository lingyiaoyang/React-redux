import { takeLatest } from 'redux-saga/effects';
import { fetchingUser } from '../reduces/main';
import { handleGetUser } from './handles/index';

export function* watcherSaga() {
  yield takeLatest(fetchingUser, handleGetUser);
}
