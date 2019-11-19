import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './containers/main';
import * as serviceWorker from './serviceWorker';
import { history, store } from './store';
import connectApp from './hocs/provider';
import theme from './services/theme';

const ProvidedApp = connectApp(store, history, theme)(App);

ReactDOM.render(<ProvidedApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
