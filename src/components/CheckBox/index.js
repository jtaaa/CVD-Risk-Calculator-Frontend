import React from 'react';
import './index.css';

const CheckBox = ({ label, name }) => (
  <div>
    <input type="checkbox" id={ name } />
    <label htmlFor={ name }>{ label }</label>
  </div>
);

export default CheckBox;
