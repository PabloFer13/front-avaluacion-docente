import {
  put, call, takeLatest, select,
} from 'redux-saga/effects';
import { push } from 'connected-react-router';
import actions from './actions';
import selectors from './selectors';
import api from '../../services/api';

function* getSurveySaga() {
  const { data: { periodo: { Preguntas: survey } } } = yield call(api.periodo.current);
  yield put(actions.setSurvey(survey));
}

function* submitAnswerSaga({ payload }) {
  // eslint-disable-next-line
  console.log(payload);
  const currentPage = yield select(selectors.currentQuestionSelector);
  const preguntas = yield select(selectors.questionsSelector);

  // call to API

  if (currentPage + 1 >= preguntas.length) {
    // eslint-disable-next-line
    alert('Gracias por contestar la encuesta.');
    yield put(actions.endSurvey());
    yield put(push('/'));
  } else {
    yield put(actions.nextQuestion());
  }
}

function* nextQuestionSaga() {
  const currentPage = yield select(selectors.currentQuestionSelector);
  yield put(actions.setQuestion(currentPage + 1));
}

function* prevQuestionSaga() {
  const currentPage = yield select(selectors.currentQuestionSelector);
  if (currentPage > 0) {
    yield put(actions.setQuestion(currentPage - 1));
  }
}

export default function* encuestaSagas() {
  yield takeLatest(actions.getSurvey.type, getSurveySaga);
  yield takeLatest(actions.submitAnswer.type, submitAnswerSaga);
  yield takeLatest(actions.prevQuestion.type, prevQuestionSaga);
  yield takeLatest(actions.nextQuestion.type, nextQuestionSaga);
}
