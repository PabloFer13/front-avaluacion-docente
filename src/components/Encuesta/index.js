import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import Pregunta from './Pregunta';
import Body from './Body';

class Encuesta extends Component {
  constructor(props) {
    super(props);
    this.state = { answers: [] };
    this.handleAnsers = this.handleAnsers.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.validateAnswers = this.validateAnswers.bind(this);
  }

  handleNext() {
    const { answers } = this.state;
    const { submitAnswer } = this.props;
    const flg = this.validateAnswers(answers, true);
    if (flg) {
      submitAnswer(answers);
      this.setState({ answers: [] });
    }
  }

  handleAnsers(answers) {
    const flg = this.validateAnswers(answers, false);
    if (flg) {
      this.setState({ answers: [...answers] });
    }
  }

  validateAnswers(answers, full) {
    const { question } = this.props;
    const q = { ...question };
    const { tipo, min, max } = q;
    let flg = true;
    if (tipo === 'multiple-select') {
      flg = answers.length >= min && answers.length <= max;
    } else if (tipo === 'multiple-input' && full) {
      flg = answers.reduce((acc, el) => (el && el.length > 0), flg);
    }

    return flg;
  }

  render() {
    const {
      options, question, total, current,
    } = this.props;
    const q = { ...question };
    const { tipo = 'none' } = q;
    const { answers } = this.state;
    const cb = this.handleAnsers;
    return (
      <div className='flex-grow-1 d-flex flex-column justify-content-start flex-wrap'>
        <ProgressBar total={total} current={current} />
        <Pregunta text={q.text} />
        <div className='flex-grow-1 d-flex flex-column justify-content-center align-items-center'>
          {Body[tipo]({
            question, options, answers, cb,
          })}
          <div className='d-flex justify-content-center' style={{ width: '100%' }}>
            {/* <button type='button' className='btn btn-danger'>Anterior</button> */}
            <button type='button' className='btn btn-primary' onClick={this.handleNext}>Siguiente</button>
          </div>
        </div>
      </div>
    );
  }
}

Encuesta.propTypes = {
  question: PropTypes.object.isRequired,
  options: PropTypes.array.isRequired,
  submitAnswer: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
};

export default Encuesta;
