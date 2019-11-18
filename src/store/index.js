import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import { createBrowserHistory as createHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../containers/reducers';
import rootSaga from '../containers/sagas';
import logger from '../middleware/logger';

const history = createHistory();
const sagaMiddleware = createSagaMiddleWare();
const routeMiddleware = routerMiddleware(history);
const middlewares = [logger, sagaMiddleware, routeMiddleware];

const appliedMiddlewares = applyMiddleware(...middlewares);

const store = createStore(
  rootReducer(history),
  compose(appliedMiddlewares),
);

sagaMiddleware.run(rootSaga);

export { store, history };
