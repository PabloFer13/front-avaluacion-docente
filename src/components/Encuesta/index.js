import React from 'react';
import PropTypes from 'prop-types';

const Encuesta = ({ children }) => (
  <div>
    {children}
  </div>
);

Encuesta.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Encuesta;
