import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import dispatcher from './dispatcher';
import { Wrapper } from './index.styled';

const Layout = ({ children, onLogout }) => (
  <Wrapper className='container-fluid d-flex flex-column'>
    <nav className='navbar sticky-top navbar-light bg-light mb-4'>
      <a className='navbar-brand' href='/'>Evaluacion Docente</a>
      <button type='button' className='btn btn-primary' onClick={onLogout}>Salir</button>
    </nav>
    {children}
  </Wrapper>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  onLogout: PropTypes.func.isRequired,
};

export default connect(null, dispatcher)(Layout);
