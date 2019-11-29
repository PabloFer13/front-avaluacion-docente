import createActions from '../../services/createActions';

const prefix = '@encuesta-docente/survey';

const types = ['GET_SURVEY', 'NEXT_QUESTION', 'SET_ANSWER', 'PREV_QUESTION'];

const {
  getSurvey, nextQuestion, setAnswer, prevQuestion,
} = createActions(prefix, types);

export default {
  getSurvey, nextQuestion, setAnswer, prevQuestion,
};
