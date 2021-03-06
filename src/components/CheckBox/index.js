import React from 'react';
import './index.css';

const CheckBox = ({ label, name, handleChange, onBlur }) => (
  <div className="checkbox-group">
    <input 
        type="checkbox"
        name={ name }
        id={ `check-box-${ name }` }
        onChange={ ({ target: { checked } }) => handleChange(checked) }
        onBlur={ ({ target: { checked } }) => onBlur(checked) } />
    <label htmlFor={ `check-box-${ name }` }>{ label }</label>
  </div>
);

export default CheckBox;
