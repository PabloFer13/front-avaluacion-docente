import createActions from '../../services/createActions';

const prefix = '@encuesta-docente/survey';

const types = [
  'GET_SURVEY',
  'SET_SURVEY',
  'NEXT_QUESTION',
  'SET_ANSWER',
  'PREV_QUESTION',
  'SUBMIT_ANSWER',
  'SET_QUESTION',
  'SET_OPTIONS',
  'END_SURVEY',
];

const {
  getSurvey,
  setSurvey,
  nextQuestion,
  setAnswer,
  prevQuestion,
  submitAnswer,
  setQuestion,
  setOptions,
  endSurvey,
} = createActions(prefix, types);

export default {
  getSurvey,
  setSurvey,
  nextQuestion,
  setAnswer,
  prevQuestion,
  submitAnswer,
  setQuestion,
  setOptions,
  endSurvey,
};
