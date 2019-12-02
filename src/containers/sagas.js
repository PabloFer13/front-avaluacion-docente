
import { all } from 'redux-saga/effects';
import loginSagas from './Login/sagas';
import cargasSagas from './Cargas/sagas';
import encuestaSagas from './Encuesta/sagas';

export default function* rootSaga() {
  yield all([loginSagas(), cargasSagas(), encuestaSagas()]);
}
