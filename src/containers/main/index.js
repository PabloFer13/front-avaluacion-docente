import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectors from './selectors';
import Layout from '../../components/Layout';
import AppView from '../../components/App';
import Login from '../Login';

const App = ({ loggedIn }) => (
  <Layout>
    {loggedIn ? <AppView /> : <Login />}
  </Layout>
);

// if (!loggedIn) return (<Login />);

// return (
//   <div><h3>Chido weeex!</h3></div>
// );


App.propTypes = {
  loggedIn: PropTypes.bool,
};

App.defaultProps = {
  loggedIn: false,
};

export default connect(selectors.propsSelector)(App);
