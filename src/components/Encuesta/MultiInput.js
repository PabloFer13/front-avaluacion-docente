import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
  width: 33%;
  margin-bottom: 20px;
`;

class MultiInput extends Component {
  constructor(props) {
    super(props);
    this.handleInputs = this.handleInputs.bind(this);
  }

  componentDidMount() {
    const { question, cb } = this.props;
    const q = { ...question };
    const { min } = q;
    const answers = [];
    for (let i = 0; i < min; i += 1) {
      answers.push('');
    }

    cb([...answers]);
  }

  handleInputs(e) {
    const { answers, cb } = this.props;
    const { target: { name, value } } = e;

    const currentAnswers = [...answers];

    const newAnswers = currentAnswers.map((it, ind) => (
      ind === Number.parseInt(name, 10) ? value : it
    ));

    cb([...newAnswers]);
  }

  render() {
    const { answers } = this.props;
    const currentAnswers = [...answers];
    return currentAnswers.map((it, ind) => (
      <InputWrapper>
        <div className='input-group'>
          <input type='text' value={it} name={ind} onChange={this.handleInputs} className='form-control' />
        </div>
      </InputWrapper>
    ));
  }
}


MultiInput.propTypes = {
  answers: PropTypes.array.isRequired,
  cb: PropTypes.func.isRequired,
  question: PropTypes.object.isRequired,
};

export default MultiInput;
