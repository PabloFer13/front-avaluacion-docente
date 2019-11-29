import actions from './actions';

const initialState = { student: {} };

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setStudentInfo.type:
      return { ...state, student: { ...payload } };
    default:
      return state;
  }
}

export default reducer;
