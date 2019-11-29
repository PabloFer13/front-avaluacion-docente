import actions from './actions';

const dispatcher = (dispatch) => ({
  loadSchedule: (params) => dispatch(actions.getStudentSubjects(params)),
  setSchedule: (params) => dispatch(actions.setStudentSubjects(params)),
  goToSurvey: (params) => dispatch(actions.goToSurvey(params)),
});

export default dispatcher;
