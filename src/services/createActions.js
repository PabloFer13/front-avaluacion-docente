// Based on https://github.com/tugorez/redux-actions

import { createAction } from 'redux-actions';

const toCamelCase = (actionTypeUpper) => {
  const actionWords = actionTypeUpper.split('_');

  const actionType = actionWords.reduce((acc, word, index) => {
    if (index === 0) return word.toLowerCase();

    const firstChar = word[0];
    const lowerWord = word.substring(1).toLowerCase();

    return `${acc}${firstChar}${lowerWord}`;
  }, '');

  return actionType;
};

function createActions(prefix, actionTypes) {
  const types = actionTypes.map((item) => toCamelCase(item));

  const actions = types.reduce((acc, actionType) => {
    const type = `${prefix}/${actionType}`;
    const action = createAction(type);
    action.type = type;

    // eslint-disable-next-line
    console.log(type);

    return { ...acc, [actionType]: action };
  }, {});

  // eslint-disable-next-line
  console.log(actions);
  return actions;
}

export default createActions;
