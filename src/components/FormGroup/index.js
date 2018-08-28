import React from 'react';
import './index.css';

const FormGroup = ({ type, label, name, choices = [], wide = false, subText = null }) => {
  switch(type) {
    case 'numeric':
      return (
        <div className="form-group">
          <label htmlFor={name}>{ label }{ subText && <span className="subtext"> ({ subText })</span> }</label>
          <input type="number" id={name} />
        </div>
      );
    case 'choice':
      return (
        <div className={`form-group ${wide ? 'form-group-wide' : ''}`}>
          <label>{ label }{ subText && <span className="subtext"> ({ subText })</span> }</label>
          <div className="button-list">
            { choices.map(choice => 
            <input type="button" value={choice} />
            )}
          </div>
        </div>
      );
    case 'bool':
      return (
        <div className={`form-group ${wide ? 'form-group-wide' : ''}`}>
          <label>{ label }{ subText && <span className="subtext"> ({ subText })</span> }</label>
          <div className="button-list">
            <input type="button" value="Yes" />
            <input type="button" value="No" />
          </div>
        </div>
      );
  }
};

export default FormGroup;
