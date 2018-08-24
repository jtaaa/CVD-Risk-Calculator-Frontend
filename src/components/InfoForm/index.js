import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
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
    this.onBlur = this.onBlur.bind(this);
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

  onBlur(name, fieldIndex) {
    return value => {
      let { valid, message } = this.validate(value, fieldIndex);
      this.setState({
        validation: { ...this.state.validation, [name]: { valid, message } },
      });
    }
  }

  handleChange(name, fieldIndex) {
    return value => {
      let { valid, message } = !this.state.validation[name].valid
          ? this.validate(value, fieldIndex)
          : this.state.validation[name];
      this.setState({
        response: { ...this.state.response, [name]: value },
        validation: { ...this.state.validation, [name]: { valid, message } },
      });
    }
  }

  submit() {
    const validation = this.props.fields.reduce((acc, { name: fieldKey }, fieldIndex) => {
      if (fieldKey !== 'valid') {
        acc[fieldKey] = this.validate(this.state.response[fieldKey], fieldIndex);
        if (!acc[fieldKey].valid) { acc.valid = false }
        if (!acc.firstError && !acc[fieldKey].valid) { acc.firstError = document.getElementById(fieldKey); }
      }
      return acc;
    }, { valid: true, firstError: null });
    this.setState({
      validation
    });
    if (validation.valid) { this.props.onSubmit(this.state.response); }
    else { validation.firstError.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
  }

  render() {
    return (
      <form>
        <h1 className="form-header">{ this.props.header }</h1>
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
                    handleChange={ this.handleChange(name, fieldIndex) }
                    onBlur={ this.onBlur(name, fieldIndex) } />
              );
              break;
            }
            case 'option': {
              inputComponent = (
                <OptionGroup
                    name={ name }
                    options={ options }
                    value={ this.state.response[name] }
                    handleChange={ this.handleChange(name, fieldIndex) }
                    onBlur={ this.onBlur(name, fieldIndex) } />
              );
              break;
            }
            case 'checkbox': {
              inputComponent = (
                <CheckBox
                    label={ label }
                    name={ name }
                    value={ this.state.response[name] }
                    handleChange={ this.handleChange(name, fieldIndex) }
                    onBlur={ this.onBlur(name, fieldIndex) } />
              );
              break;
            }
            default:
              break;
          }
          const { valid, message } = this.state.validation[name];
          return (
            <div id={ name } key={ name } className="form-group">
              { type !== 'checkbox' && <label htmlFor={ name }>{ label }</label> }
              <div className="input-error-container">
                { inputComponent }
                <CSSTransitionGroup
                    transitionName="show-error"
                    transitionEnterTimeout={0}
                    transitionLeaveTimeout={0}>
                  { !valid && <div className="error-message" key="error">{ message }</div> }
                </CSSTransitionGroup>
              </div>
            </div>
          );
        })}
        <input type="button" value="Submit!" className="submit-button" onClick={ this.submit } />
      </form>
    );
  }
}

export default InfoForm;
