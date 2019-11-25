import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props) => {
  const {
    text,
    value,
    changeCb,
  } = props;

  return (
    <div className='form-group'>
      <label>{text}</label>
      <textarea className='form-control' rows='3' value={value} onChange={changeCb} />
    </div>
  );
};

TextInput.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  changeCb: PropTypes.func.isRequired,
};

export default TextInput;
