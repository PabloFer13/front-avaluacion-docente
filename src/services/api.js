import axios from 'axios';

const API_URL = 'https://evaluacion-docente-api.herokuapp.com/api';
// const API_URL = 'http://localhost:3015/api';
axios.defaults.baseURL = API_URL;
const { post, get } = axios;

export default {
  students: {
    login: (credential) => post('/alumnos/session', { ...credential }),
    cargas: ({ id }) => get(`/alumnos/${id}/cargas`),
  },
  periodo: {
    current: () => get('/periodos/current'),
  },
};
