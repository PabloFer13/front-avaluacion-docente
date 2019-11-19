import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectors from './selectors';
// import Layout from '../../components/Layout';
import AppView from '../../components/App';
import Login from '../Login';

const App = ({ loggedIn }) => {
  if (!loggedIn) return (<Login />);

  return <AppView />;
};


App.propTypes = {
  loggedIn: PropTypes.bool,
};

App.defaultProps = {
  loggedIn: false,
};

export default connect(selectors.propsSelector)(App);
