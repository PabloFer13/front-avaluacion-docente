import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import selectors from './selectors';
import dispatcher from './dispatcher';
import View from '../../components/Carga';

class Cargas extends Component {
  componentDidMount() {
    const { loadSchedule } = this.props;
    loadSchedule();
  }

  render() {
    const { props } = this;
    return (<View {...props} />);
  }
}

Cargas.propTypes = {
  loadSchedule: PropTypes.func.isRequired,
};

export default connect(selectors.propsSelector, dispatcher)(Cargas);
