import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from '../Layout/index.styled';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
      state: { email, password },
    } = this;
    onLogin({ email, password });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className='container-fluid'>
        <Wrapper className='d-flex flex-row justify-content-center align-items-center'>
          <div className='col-md-4 align-self-center'>
            <div className='card text-center'>
              <div className='card-header'>
                Iniciar Sesion
              </div>
              <div className='card-body text-left'>
                <form>
                  <div className='form-group'>
                    <label>Email</label>
                    <input type='text' name='email' className='form-control' onChange={this.handleInput} value={email} />
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
        </Wrapper>
      </div>
    );
  }
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
