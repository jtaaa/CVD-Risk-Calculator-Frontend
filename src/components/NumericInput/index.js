import React from 'react';
import './index.css';

const NumericInput = ({ name, placeholder }) => (
  <input id={ name } placeholder={ placeholder } />
);

export default NumericInput;
