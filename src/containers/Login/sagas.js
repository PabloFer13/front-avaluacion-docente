/* eslint-disable */
import { put, call, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import appActions from '../main/actions';
import studentActions from '../redux/student/actions';
import api from '../../services/api';

function* loginSaga({ payload }) {
  const { email, password } = payload;
  try {
    const { data } = yield call(api.students.login, { email, password });
    yield put(studentActions.setStudentInfo(data.alumno));
    yield put(appActions.setStatus(true));
  } catch{
    // eslint-disable-next-line
    alert('Credenciales incorrectas');
  }
}

function* logoutSagas() {
  yield put(appActions.setStatus(false));
}

export default function* loginSagas() {
  yield takeLatest(actions.login.type, loginSaga);
  yield takeLatest(actions.logout.type, logoutSagas);
}