import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './index.styled';

const Layout = ({ children }) => (
  <div className='container-fluid'>
    <nav className='navbar sticky-top navbar-light bg-light'>
      <a className='navbar-brand' href='/'>Evaluacion Docente</a>
      <button type='button' className='btn btn-primary'>Salir</button>
    </nav>
    <Wrapper className='d-flex flex-row justify-content-center align-items-center'>
      {children}
    </Wrapper>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
