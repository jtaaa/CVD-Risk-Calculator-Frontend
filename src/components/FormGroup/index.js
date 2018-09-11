import React from 'react';
import './index.css';

const FormGroup = ({ 
  type, 
  label, 
  name, 
  setValue, 
  responseState: { value, valid, errorMessage },
  choices = [], 
  wide = false, 
  subText = null
}) => {
  switch(type) {
    case 'numeric':
      return (
        <div className={`form-group ${wide ? 'form-group-wide' : ''} ${!valid ? 'form-group-error' : ''}`}>
          <label htmlFor={name}>{ label }{ subText && <span className="subtext"> ({ subText })</span> }</label>
          <input type="number" id={name} onChange={({ target: { value } }) => setValue(value)} value={value} />
          <div className={`error-message ${valid ? 'error-message-hidden' : ''}`}>{ errorMessage }</div>
        </div>
      );
    case 'choice':
      return (
        <div className={`form-group ${wide ? 'form-group-wide' : ''} ${!valid ? 'form-group-error' : ''}`}>
          <label>{ label }{ subText && <span className="subtext"> ({ subText })</span> }</label>
          <div className="button-list">
            { choices.map(choice => 
            <input className={value === choice ? 'selected' : ''} type="button" value={choice} key={choice} onClick={() => setValue(choice)} />
            )}
          </div>
          <div className={`error-message ${valid ? 'error-message-hidden' : ''}`}>{ errorMessage }</div>
        </div>
      );
    case 'bool':
      return (
        <div className={`form-group ${wide ? 'form-group-wide' : ''} ${!valid ? 'form-group-error' : ''}`}>
          <label>{ label }{ subText && <span className="subtext"> ({ subText })</span> }</label>
          <div className="button-list">
            <input className={value === true  ? 'selected' : ''} type="button" value="Yes" onClick={()=> setValue(true)} />
            <input className={value === false ? 'selected' : ''} type="button" value="No" onClick={()=> setValue(false)} />
          </div>
          <div className={`error-message ${valid ? 'error-message-hidden' : ''}`}>{ errorMessage }</div>
        </div>
      );
  }
};

export default FormGroup;
