import React from 'react';

const NumericInput = ({ name, placeholder }) => (
  <input type="number" id={ name } placeholder={ placeholder } />
);

export default NumericInput;
