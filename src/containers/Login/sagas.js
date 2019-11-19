/* eslint-disable */
import { put, call, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import appActions from '../main/actions';

function* loginSaga({ payload }) {
  const { matricula, password } = payload;
  console.group('Saga Payload');
  console.log('Matricula: ', matricula);
  console.log('Password: ', password);
  console.groupEnd();
  yield put(appActions.setStatus(true));
}

export default function* loginSagas() {
  yield takeLatest(actions.login.type, loginSaga);
}