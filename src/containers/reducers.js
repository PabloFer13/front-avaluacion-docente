import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './main/reducer';
import cargas from './Cargas/reducer';
import encuesta from './Encuesta/reducer';
import student from './redux/student/reducer';

const createRootReducer = (history) => combineReducers({
  app,
  cargas,
  student,
  encuesta,
  router: connectRouter(history),
});

export default createRootReducer;
