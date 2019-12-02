import {
  put, call, takeLatest, select,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import actions from './actions';
import selectors from './selectors';
import api from '../../services/api';

function* getScheduleSaga() {
  const { id } = yield select(selectors.studentSelector);
  try {
    const { data: { cargas } } = yield call(api.students.cargas, { id });
    yield put(actions.setStudentSubjects(cargas));
  } catch {
    // eslint-disable-next-line
    alert('No se pudieron cargar las materias');
  }
}

function* goToSurveySaga({ payload: idCarga }) {
  yield put(push(`/carga/${idCarga}/encuesta`));
}

export default function* loginSagas() {
  yield takeLatest(actions.getStudentSubjects.type, getScheduleSaga);
  yield takeLatest(actions.goToSurvey.type, goToSurveySaga);
}
