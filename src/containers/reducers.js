import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import app from './main/reducer';

const createRootReducer = (history) => combineReducers({
  app,
  router: connectRouter(history),
});

export default createRootReducer;
