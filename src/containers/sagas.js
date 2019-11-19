import { all } from 'redux-saga/effects';
import loginSagas from './Login/sagas';

export default function* rootSaga() {
  yield all([loginSagas()]);
}
