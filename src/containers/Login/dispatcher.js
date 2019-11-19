import actions from './actions';

const dispatcher = (dispatch) => ({
  onLogin: (params) => dispatch(actions.login(params)),
});

export default dispatcher;
