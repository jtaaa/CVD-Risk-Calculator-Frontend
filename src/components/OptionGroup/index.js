import React from 'react';
import './index.css';

const OptionGroup = ({ options }) => (
  <div className="option-group">
    {options.map(option => 
      <input type="button" value={ option } />
    )}
  </div>
);

export default OptionGroup;
