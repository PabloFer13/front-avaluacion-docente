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
