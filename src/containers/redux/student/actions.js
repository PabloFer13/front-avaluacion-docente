import createActions from '../../../services/createActions';

const prefix = '@encuesta-docente/student';

const types = ['SET_STUDENT_INFO'];

const { setStudentInfo } = createActions(prefix, types);

export default { setStudentInfo };
