import createActions from '../../services/createActions';

const prefix = '@encuesta-docente/login';

const types = ['LOGIN', 'LOGOUT'];

const { login, logout } = createActions(prefix, types);

export default { login, logout };
