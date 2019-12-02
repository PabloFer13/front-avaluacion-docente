import actions from './actions';

const initialState = {
  survey: [],
  // currentAnswer: [],
  currentQuestion: -1,
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    // case actions.setAnswer.type:
    //   return { ...state, currentAnswer: [...payload] };
    case actions.setSurvey.type:
      return { ...state, survey: [...payload], currentQuestion: 0 };
    case actions.setQuestion.type:
      return { ...state, currentQuestion: payload };
    // case actions.setQuestion.type:
    //   return { ...state, current: payload.current, currentQuestion: payload.question };
    // case actions.setOptions.type:
    //   return { ...state, currentOptions: [...payload] };
    case actions.endSurvey.type:
      return { ...initialState };
    default:
      return state;
  }
}

export default reducer;
