import React from 'react';
import PropTypes from 'prop-types';

const SelectOne = (props) => {
  const {
    text,
    clickCb,
    value,
    selected,
    name,
  } = props;

  return (
    <div className='form-check' onClick={clickCb}>
      <input className='form-check-input' type='radio' name={name} value={value} checked={selected} />
      <label className='form-check-label'>
        {text}
      </label>
    </div>
  );
};

SelectOne.propTypes = {
  text: PropTypes.string.isRequired,
  clickCb: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};

export default SelectOne;

/*
<SelectOne name='nombre1' value='1' selected text='op1' />
      <SelectOne name='nombre2' value='2' selected text='op2' />
      <SelectOne name='nombre3' value='3' selected text='op3' />
      <SelectOne name='nombre4' value='4' selected text='op4' />
      <SelectOne name='nombre5' value='5' selected text='op5' />
 */
