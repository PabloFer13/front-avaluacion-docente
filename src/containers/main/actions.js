import createActions from '../../services/createActions';

const prefix = '@encuesta-docente/app';

const types = ['SET_STATUS'];

const { setStatus } = createActions(prefix, types);

export default { setStatus };
