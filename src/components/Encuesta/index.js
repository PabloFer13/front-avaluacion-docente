import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ProgressBar from './ProgressBar';
import Pregunta from './Pregunta';
import MultipleInput from './MultiInput';

class Encuesta extends Component {
  constructor(props) {
    super(props);
    this.renderQuestion = this.renderQuestion.bind(this);
  }

  renderQuestion() {
    const { pregunta: {
 type, opciones, min, max 
} } = this.props;
    if (type === 'multipleInput') {
      const opciones = [];
      for (let i = 0; i < min; i++) {
        opciones.push();;
      }
    }
    if (type === 'multipleSelect') {
      return <div>Multiple Select</div>;
    }
    if (type === 'textInput') {
      return <div>Text Input</div>;
    }
    return <div>Select One</div>;
  }

  render() {
    return (
      <div className='flex-grow-1 d-flex flex-column justify-content-start flex-wrap'>
        <ProgressBar />
        <Pregunta text='Que pregunta quieres que te haga?' />
        <div className='flex-grow-1 d-flex flex-column justify-content-center align-items-center'>
          {this.renderQuestion()}
          <div className='d-flex justify-content-between' style={{ width: '100%' }}>
            <button type='button' className='btn btn-danger'>Anterior</button>
            <button type='button' className='btn btn-primary'>Siguiente</button>
          </div>
        </div>
      </div>
    );
  }
}

Encuesta.propTypes = {
  pregunta: PropTypes.node.isRequired,
};

export default Encuesta;
