import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 33%;
  margin-bottom: 20px;
`;

class SelectOne extends Component {
  constructor(props) {
    super(props);
    this.handleOption = this.handleOption.bind(this);
  }

  handleOption(idOpt) {
    const { cb } = this.props;
    cb([idOpt]);
  }

  render() {
    const {
      options, answers,
    } = this.props;
    const opts = [...options];
    const answer = answers.length > 0 ? answers[0] : '';
    return (
      opts.map((opt) => {
        const { id, text } = opt;
        return (
          <InputWrapper key={id} onClick={() => this.handleOption(id)}>
            <div className='form-check'>
              <input className='form-check-input' type='radio' value={id} checked={answer === id} />
              <label className='form-check-label'>
                {text}
              </label>
            </div>
          </InputWrapper>
        );
      })
    );
  }
}

SelectOne.propTypes = {
  options: PropTypes.array.isRequired,
  cb: PropTypes.func.isRequired,
  answers: PropTypes.array.isRequired,
};

export default SelectOne;
