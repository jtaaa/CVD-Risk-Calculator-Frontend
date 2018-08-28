import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './index.css';

import NumericInput from './../NumericInput';
import OptionGroup from './../OptionGroup';
import CheckBox from './../CheckBox';
import FormGroup from './../FormGroup';

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
      return { valid: false, message: ErrorMessages.TOO_LARGE(max) };
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
      <form className="full-form">
        <div className="form-row">
          <FormGroup type="numeric" label="Current Age" />
          <FormGroup type="choice" label="Sex" choices={['Male', 'Female']} />
          <FormGroup type="bool" label="Married" />
        </div>
        <div className="form-row">
          <FormGroup type="choice" label="Ethnicity" choices={['Afro-Caribbean', 'Indo-Caribbean', 'Mixed-Caribbean']} wide={true} />
          <FormGroup type="choice" label="Level of Education" choices={['Pre-Seconday', 'Secondary', 'Tertiary']} wide={true} />
        </div>
        <div className="divider"></div>
        <div className="form-row">
          <FormGroup type="numeric" label="Total Cholesterol" subText="mg/dL" />
          <FormGroup type="numeric" label="HDL Cholesterol" subText="mg/dL" />
          <FormGroup type="numeric" label="LDL Cholesterol" subText="mg/dL" />
        </div>
        <div className="form-row">
          <FormGroup type="numeric" label="Systolic Blood Pressure" subText="mm Hg" />
          <FormGroup type="numeric" label="Diastolic Blood Pressure" subText="mm Hg" />
          <div className="spacer"></div>
        </div>
        <div className="divider"></div>
        <div className="form-row">
          <FormGroup type="bool" label="History of High Cholesterol" />
          <FormGroup type="choice" label="Smoker" choices={['Non-Smoker', 'Ex-Smoker', 'Smoker']} wide={true} />
          <div className="spacer"></div>
        </div>
        <div className="form-row">
          <FormGroup type="bool" label="History of Atrial Fibrillation" />
          <FormGroup type="bool" label="History of Hypertension" />
          <FormGroup type="bool" label="History of Cardiovascular Disease in Family" wide={true} />
        </div>
      </form>
    );
  }
}

export default InfoForm;
