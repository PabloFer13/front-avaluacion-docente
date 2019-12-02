import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 33%;
  margin-bottom: 20px;
`;

class MultiSelect extends Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(idOpt) {
    const { answers, cb } = this.props;

    const oldAnswers = [...answers];
    const arrayIndex = oldAnswers.findIndex((it) => it === idOpt);

    const newAnswers = arrayIndex === -1
      ? [...answers, idOpt]
      : [...oldAnswers.filter((it, ind) => ind !== arrayIndex)];

    cb([...newAnswers]);
  }

  render() {
    const { options, answers } = this.props;
    const opts = [...options];
    const currentAnswers = [...answers];
    return opts.map((opt) => {
      const { id, text } = opt;
      // <div key={id} className='form-check' onClick={() => this.handleSelect(id)}>
      return (
        <InputWrapper key={id} onClick={() => this.handleSelect(id)}>
          <div className='form-check'>
            <input readOnly className='form-check-input' type='checkbox' value={id} checked={currentAnswers.findIndex((it) => it === id) > -1} />
            <label className='form-check-label'>
              {text}
            </label>
          </div>
        </InputWrapper>
      );
    });
  }
}

MultiSelect.propTypes = {
  options: PropTypes.array.isRequired,
  cb: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired,
};

export default MultiSelect;
