import React from 'react';
import './index.css';

const OptionGroup = ({ options, value, handleChange }) => (
  <div className="option-group">
    {options.map(option => 
      <input
          key={ option }
          type="button"
          className={value === option ? 'selected' : ''}
          value={ option }
          onClick={ () => handleChange(option) } />
    )}
  </div>
);

export default OptionGroup;
