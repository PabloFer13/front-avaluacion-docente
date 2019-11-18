import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectors from './selectors';

const App = ({ loggedIn }) => {
  if (!loggedIn) return <div><h3>Inicia Sesion porfa wex</h3></div>;

  return (
    <div><h3>Chido weeex!</h3></div>
  );
};

App.propTypes = {
  loggedIn: PropTypes.bool,
};

App.defaultProps = {
  loggedIn: false,
};

export default connect(selectors.propsSelector)(App);
