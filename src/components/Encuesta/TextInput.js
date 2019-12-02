import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 33%;
  margin-bottom: 20px;
`;

class TextInput extends Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    const { target: { value } } = e;
    const { cb } = this.props;
    cb([value]);
  }

  render() {
    const { answers } = this.props;
    const answer = answers.length > 0 ? answers[0] : '';

    return (
      <InputWrapper>
        <div className='form-group'>
          {/* <label>{text}</label> */}
          <textarea className='form-control' rows='10' value={answer} onChange={this.handleInput} />
        </div>
      </InputWrapper>
    );
  }
}

TextInput.propTypes = {
  answers: PropTypes.array.isRequired,
  cb: PropTypes.func.isRequired,
};

export default TextInput;
