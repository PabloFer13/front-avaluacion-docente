import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matricula: '',
      password: '',
    };
  }

  handleInput = (e) => {
    const { target: { name, value } } = e;
    this.setState({ [name]: value });
  };

  handleLogin = () => {
    const {
      props: { onLogin },
      state: { matricula, password },
    } = this;
    onLogin({ matricula, password });
  };

  render() {
    const { matricula, password } = this.state;
    return (
      <div className='col-md-4 align-self-center'>
        <div className='card text-center'>
          <div className='card-header'>
            Iniciar Sesion
          </div>
          <div className='card-body text-left'>
            <form>
              <div className='form-group'>
                <label>Matricula</label>
                <input type='text' name='matricula' className='form-control' onChange={this.handleInput} value={matricula} />
              </div>
              <div className='form-group'>
                <label>Password</label>
                <input type='password' name='password' className='form-control' onChange={this.handleInput} value={password} />
              </div>
            </form>
          </div>
          <div className='card-footer text-muted'>
            <button type='button' className='btn btn-primary' onClick={this.handleLogin}>Log In</button>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
