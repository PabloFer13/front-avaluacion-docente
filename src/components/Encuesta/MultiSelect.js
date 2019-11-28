import React from 'react';
import PropTypes from 'prop-types';

const MultiSelect = (props) => {
  const {
    text,
    clickCb,
    value,
    selected,
    name,
  } = props;

  return (
    <div className='form-check' onClick={clickCb}>
      <input className='form-check-input' type='checkbox' name={name} value={value} checked={selected} />
      <label className='form-check-label'>
        {text}
      </label>
    </div>
  );
};

MultiSelect.propTypes = {
  text: PropTypes.string.isRequired,
  clickCb: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default MultiSelect;

/*
<MultiSelect name='nombre1' value='1' selected text='op1' />
      <MultiSelect name='nombre2' value='2' selected text='op2' />
      <MultiSelect name='nombre3' value='3' selected text='op3' />
      <MultiSelect name='nombre4' value='4' selected text='op4' />
      <MultiSelect name='nombre5' value='5' selected text='op5' />
       */
