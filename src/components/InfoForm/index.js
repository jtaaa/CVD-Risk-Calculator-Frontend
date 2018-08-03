import React from 'react';
import './index.css';

import NumericInput from './../NumericInput';
import OptionGroup from './../OptionGroup';
import CheckBox from './../CheckBox';

import ErrorMessages from './ErrorMessages';

class InfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = this.props.fields.reduce((acc, field) => {
        acc.response[field.name] = field.type !== 'checkbox' ? '' : false;
        acc.validation[field.name] = { valid: true, message: '' };
      return acc;
    }, { response: {}, validation: { valid: true } });

    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
  }

  checkEmpty(value) {
    return value === ''
        ? { valid: false, message: ErrorMessages.FIELD_EMPTY }
        : { valid: true,  message: '' };
  }

  checkRange(value, fieldIndex) {
    const { min = null, max = null } = this.props.fields[fieldIndex];
    if (min && value < min) {
      return { valid: false, message: ErrorMessages.TOO_SMALL(min) };
    }
    if (max && value > max) {
      return { valid: false, message: ErrorMessages.TOO_LARGE(min) };
    }
    return { valid: true,  message: '' };
  }

  validate(value, fieldIndex) {
    let emptyCheck = this.checkEmpty(value);
    if (!emptyCheck.valid) { return emptyCheck; }
    let rangeCheck = this.checkRange(value, fieldIndex);
    if (!rangeCheck.valid) { return rangeCheck; }
    return { valid: true,  message: '' };
  }

  handleChange(name, fieldIndex) {
    return value => {
      let { valid, message } = this.validate(value, fieldIndex);
      this.setState({
        response: { ...this.state.response, [name]: value },
        validation: { ...this.state.validation, [name]: { valid, message } },
      });
    }
  }

  submit() {
    const validation = Object.keys(this.state.validation).reduce((acc, fieldKey) => {
      if (fieldKey !== 'valid') {
        acc[fieldKey] = this.checkEmpty(this.state.response[fieldKey]);
        if (!acc[fieldKey].valid) { acc.valid = false }
      }
      return acc;
    }, { valid: true });
    this.setState({
      validation
    });
    if (validation.valid) { this.props.onSubmit(this.state.response); }
  }

  render() {
    return (
      <form>
        {this.props.fields.map((field, fieldIndex) => {
          let inputComponent = null;
          const { name, label, type, placeholder = null, options = null } = field;
          switch(type) {
            case 'number': {
              inputComponent = (
                <NumericInput 
                    name={ name }
                    placeholder={ placeholder }
                    value={ this.state.response[name] }
                    handleChange={ this.handleChange(name, fieldIndex) } />
              );
              break;
            }
            case 'option': {
              inputComponent = (
                <OptionGroup
                    name={ name }
                    options={ options }
                    value={ this.state.response[name] }
                    handleChange={ this.handleChange(name, fieldIndex) } />
              );
              break;
            }
            case 'checkbox': {
              inputComponent = (
                <CheckBox
                    label={ label }
                    name={ name }
                    value={ this.state.response[name] }
                    handleChange={ this.handleChange(name, fieldIndex) } />
              );
              break;
            }
            default:
              break;
          }
          const { valid, message } = this.state.validation[name];
          return (
            <div key={ name } className="form-group">
              { type !== 'checkbox' && <label htmlFor={ name }>{ label }</label> }
              { inputComponent }
              { !valid && <div className="error-message">{ message }</div> }
            </div>
          );
        })}
        <button type="button" onClick={ this.submit }>Submit!</button>
      </form>
    );
  }
}

export default InfoForm;
