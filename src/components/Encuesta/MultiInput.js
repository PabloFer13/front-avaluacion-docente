import React from 'react';
import PropTypes from 'prop-types';

const MultiInput = (props) => {
  const {
    name,
    value,
    changeCb,
    type,
  } = props;

  return (
    <div className='input-group'>
      <input type={type} value={value} name={name} onChange={changeCb} className='form-control' />
    </div>
  );
};

MultiInput.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  changeCb: PropTypes.func.isRequired,
};

export default MultiInput;
