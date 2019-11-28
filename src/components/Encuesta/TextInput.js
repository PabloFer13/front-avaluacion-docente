import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 33%;
  margin-bottom: 20px;
`;

const TextInput = (props) => {
  const {
    text,
    value,
    changeCb,
  } = props;

  return (
    <InputWrapper>
      <div className='form-group'>
        <label>{text}</label>
        <textarea className='form-control' rows='10' value={value} onChange={changeCb} />
      </div>
    </InputWrapper>
  );
};

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeCb: PropTypes.func.isRequired,
};

export default TextInput;

/*
<TextInput
        value='jkasbdclasbdo'
        text='Respuesta'
        changeCb={() => {
          // eslint-disable-next-line
          console.log('Hola Mundo');
        }}
      />
       */
