
import { all } from 'redux-saga/effects';
import loginSagas from './Login/sagas';
import cargasSagas from './Cargas/sagas';

export default function* rootSaga() {
  yield all([loginSagas(), cargasSagas()]);
}
