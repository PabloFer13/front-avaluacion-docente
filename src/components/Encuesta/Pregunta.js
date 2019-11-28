import React from 'react';
import PropTypes from 'prop-types';

const Preguntas = ({ text }) => (
  <div><h3>{text}</h3></div>
);

Preguntas.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Preguntas;
