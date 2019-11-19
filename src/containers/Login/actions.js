import createActions from '../../services/createActions';

const prefix = '@encuesta-docente/login';

const types = ['LOGIN'];

const { login } = createActions(prefix, types);

export default { login };
