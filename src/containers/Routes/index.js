
import React from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router';
import Carga from '../Cargas';
import Encuesta from '../Encuesta';

// eslint-disable-next-line
const Routes = ({ location }) => (
  <Switch location={location}>
    <Route exact path='/carga/:idCarga/encuesta' component={Encuesta} />
    <Route exact path='/' component={Carga} />
    <Redirect to='/' />
  </Switch>
);

const mapStateToProps = ({ router }) => ({ location: router.location });

export default connect(mapStateToProps)(Routes);
