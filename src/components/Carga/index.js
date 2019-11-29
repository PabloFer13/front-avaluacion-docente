import React from 'react';
import PropTypes from 'prop-types';
import { CardWrapper, Card } from './index.styled';

const Carga = (props) => {
  const { materias, goToSurvey } = props;

  return (
    <div className=' flex-grow-1 d-flex flex-row justify-content-between flex-wrap'>
      {materias.map((materia) => {
        const {
          Oferta: { Maestro: teacher, Materia: subject },
          id: idCarga,
          encuestaStatus,
        } = materia;
        return (
          <CardWrapper className='col-sm-12 col-md-3 mb-3'>
            <Card className='card text-center'>
              <div className='card-header'>
                {subject.nombre}
              </div>
              <div className='card-body'>
                <p className='card-text'>{`${teacher.nombre}${teacher.segundoNombre ? ` ${teacher.segundoNombre}` : ''}${teacher.apellido ? ` ${teacher.apellido}` : ''}${teacher.segundoApellido ? ` ${teacher.segundoApellido}` : ''}`}</p>
              </div>
              <div className='card-footer'>
                {encuestaStatus === 'completed'
                  ? <p>Encuesta Finalizada</p>
                  : <button type='button' className='btn btn-primary' onClick={() => goToSurvey(idCarga)}>Contestar Encuesta</button>}
              </div>
            </Card>
          </CardWrapper>
        );
      })}
    </div>
  );
};

Carga.propTypes = {
  materias: PropTypes.array.isRequired,
  goToSurvey: PropTypes.func.isRequired,
};

export default Carga;
