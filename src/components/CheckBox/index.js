import React from 'react';
import './index.css';

const CheckBox = ({ label, name, handleChange }) => (
  <div className="checkbox-group">
    <input 
        type="checkbox"
        id={ name }
        onChange={ ({ target: { checked } }) => handleChange(checked) } />
    <label htmlFor={ name }>{ label }</label>
  </div>
);

export default CheckBox;
