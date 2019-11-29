import createActions from '../../services/createActions';

const prefix = '@encuesta-docente/cargas';

const types = ['GET_STUDENT_SUBJECTS', 'SET_STUDENT_SUBJECTS', 'GO_TO_SURVEY'];

const { getStudentSubjects, setStudentSubjects, goToSurvey } = createActions(prefix, types);

export default { getStudentSubjects, setStudentSubjects, goToSurvey };
