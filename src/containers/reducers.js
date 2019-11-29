import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './main/reducer';
import student from './redux/student/reducer';

const createRootReducer = (history) => combineReducers({
  app,
  student,
  router: connectRouter(history),
});

export default createRootReducer;
