import actions from './actions';

const initialState = { materias: [] };

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case actions.setStudentSubjects.type:
      return { ...state, materias: [...payload] };
    default:
      return state;
  }
}

export default reducer;
