import React from 'react';
import { connect } from 'react-redux';
import LoginView from '../../components/Login';
import dispatcher from './dispatcher';

const Login = (props) => <LoginView {...props} />;

export default connect(null, dispatcher)(Login);
