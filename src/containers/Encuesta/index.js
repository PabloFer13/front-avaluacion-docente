import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import selectors from './selectors';
import dispatcher from './dispatcher';
import EncuestaView from '../../components/Encuesta';

class Encuesta extends Component {
  componentDidMount() {
    const { getSurvey } = this.props;
    getSurvey();
  }

  render() {
    return (
      <EncuestaView {...this.props} />
    );
  }
}

Encuesta.propTypes = {
  getSurvey: PropTypes.func.isRequired,
};

export default connect(selectors.propsSelector, dispatcher)(Encuesta);
