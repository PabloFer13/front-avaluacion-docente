import React from 'react';
import Routes from '../../containers/Routes';

const App = () => (
  <>
    <nav className='navbar fixed-top navbar-light bg-light'>
      <a className='navbar-brand' href='/'>Evaluacion Docente</a>
      <button type='button' className='btn btn-primary'>Salir</button>
    </nav>
    <Routes />
  </>
);

export default App;
