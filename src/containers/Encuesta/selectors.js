const propsSelector = ({ encuesta }) => {
  const { survey, currentQuestion } = encuesta;

  if (currentQuestion < 0) {
    return {
      question: {}, options: [], total: 0, current: 0,
    };
  }

  const question = { ...survey[currentQuestion] } || {};
  const options = question.Opciones ? [...question.Opciones] : [];
  const total = survey.length;
  const current = currentQuestion + 1;

  return {
    question,
    options,
    total,
    current,
  };
};

const currentQuestionSelector = ({ encuesta: { currentQuestion } }) => currentQuestion;

const questionsSelector = ({ encuesta: { survey } }) => survey;

export default { propsSelector, currentQuestionSelector, questionsSelector };
