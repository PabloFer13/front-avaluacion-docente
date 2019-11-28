import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 33%;
  margin-bottom: 20px;
`;

const MultiInput = (props) => {
  const {
    name,
    value,
    changeCb,
    type,
  } = props;

  return (
    <InputWrapper>
      <div className='input-group'>
        <input type={type} value={value} name={name} onChange={changeCb} className='form-control' />
      </div>
    </InputWrapper>
  );
};

MultiInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  changeCb: PropTypes.func.isRequired,
};

export default MultiInput;

{/* <MultiInput
        name='nombre uno'
        type='text'
        value='nuloooo'
        changeCb={(e) => {
          // eslint-disable-next-line
          console.log('Nombre: ', e.target.name);
          // eslint-disable-next-line
          console.log('Valor: ', e.target.value);
        }}
      />
      <MultiInput
        name='nombre dos'
        type='text'
        value='nuloooo'
        changeCb={(e) => {
          // eslint-disable-next-line
          console.log('Nombre: ', e.target.name);
          // eslint-disable-next-line
          console.log('Valor: ', e.target.value);
        }}
      />
      <MultiInput
        name='nombre tres'
        type='text'
        value='nuloooo'
        changeCb={(e) => {
          // eslint-disable-next-line
          console.log('Nombre: ', e.target.name);
          // eslint-disable-next-line
          console.log('Valor: ', e.target.value);
        }}
      /> */}