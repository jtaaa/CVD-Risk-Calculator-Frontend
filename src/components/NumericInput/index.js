import React from 'react';

const NumericInput = ({ name, placeholder, value, handleChange }) => (
  <input 
      type="number"
      id={ name }
      placeholder={ placeholder }
      value={ value }
      onChange={ ({ target: { value } }) => handleChange(value) } />
);

export default NumericInput;
