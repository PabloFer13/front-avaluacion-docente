import actions from './actions';

const dispatcher = (dispatch) => ({
  getSurvey: (cargaId) => dispatch(actions.getSurvey(cargaId)),
  previousQuestion: () => dispatch(actions.prevQuestion()),
  submitAnswer: (params) => dispatch(actions.submitAnswer(params)),
});

export default dispatcher;
