import React from 'react';
import './index.css';

const OptionGroup = ({ name, options, value, handleChange, onBlur }) => (
  <div className="option-group">
    {options.map(option => 
      <input
          name={ name }
          key={ option }
          type="button"
          className={ value === option ? 'selected' : '' }
          value={ option }
          onClick={ () => handleChange(option) }
          onBlur={ ({ relatedTarget }) => 
              relatedTarget && relatedTarget.name &&
              relatedTarget.name !== name && onBlur(value)
          } />
    )}
  </div>
);

export default OptionGroup;
