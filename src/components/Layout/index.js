import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './index.styled';

const Layout = ({ children }) => (
  <div className='container-fluid'>
    <Wrapper className='d-flex flex-row justify-content-center align-items-center'>
      {children}
    </Wrapper>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
