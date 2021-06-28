import { call, put } from 'redux-saga/effects';
import { fetchingUser } from '../../reduces/main';
import { requestGetUser } from '../requests';

export function* handleGetUser(action) {
  try {
    const response = yield call(requestGetUser);
    const { data } = response;
    yield put(fetchingUser(data));
  } catch (error) {
    console.log(error);
  }
}
