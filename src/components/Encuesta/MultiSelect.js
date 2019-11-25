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
