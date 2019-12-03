import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
`;

const Preguntas = ({ text }) => (
  <Wrapper><h3>{text}</h3></Wrapper>
);

Preguntas.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Preguntas;
