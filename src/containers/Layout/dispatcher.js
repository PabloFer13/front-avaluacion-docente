import actions from '../Login/actions';

const dispatcher = (dispatch) => ({
  onLogout: () => dispatch(actions.logout()),
});

export default dispatcher;
