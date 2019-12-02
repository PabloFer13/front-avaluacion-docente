import React from 'react';
import MultiInput from './MultiInput';
import MultiSelect from './MultiSelect';
import SelectOne from './SelectOne';
import TextInput from './TextInput';

const Components = {
  'multiple-input': (props) => <MultiInput {...props} />,
  'multiple-select': (props) => <MultiSelect {...props} />,
  'select-one': (props) => <SelectOne {...props} />,
  'text-input': (props) => <TextInput {...props} />,
  none: () => <div>Cargado espere un momento...</div>,
};

export default Components;
