import React from 'react';

const NumericInput = ({ name, placeholder, value, handleChange, onBlur }) => (
  <input 
      type="number"
      name={ name }
      id={ name }
      placeholder={ placeholder }
      value={ value }
      onChange={ ({ target: { value } }) => handleChange(value) }
      onBlur={ ({ target: { value } }) => onBlur(value) } />
);

export default NumericInput;
