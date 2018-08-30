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

    this.state = {
      age: '',
      sex: '',
      married: '',
      ethnicity: '',
      education: '',
      tc: '',
      hdl: '',
      ldl: '',
      sysBP: '',
      diaBP: '',
      highCholesterol: '',
      smoker: '',
      artrialFibrillation: '',
      hypertension: '',
      familialCVD: '',
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(name) {
    return value => this.setState({ [name]: value });
  }

  render() {
    return (
      <form className="full-form">
        <div className="fields-container">
          <h3 className="section-title">General Information</h3>
          <div className="form-row">
            <FormGroup type="numeric" label="Current Age" name="age" setValue={this.handleInput('age')} />
            <FormGroup type="choice" label="Sex" choices={['Male', 'Female']} name="sex" setValue={this.handleInput('sex')} />
            <FormGroup type="bool" label="Married" name="married" setValue={this.handleInput('married')} />
          </div>
          <div className="form-row">
            <FormGroup type="choice" label="Ethnicity" choices={['Afro-Caribbean', 'Indo-Caribbean', 'Mixed-Caribbean']} wide={true} name="ethnicity" setValue={this.handleInput('ethnicity')} />
            <FormGroup type="choice" label="Level of Education" choices={['Pre-Secondary', 'Secondary', 'Tertiary']} wide={true} name="education" setValue={this.handleInput('education')} />
          </div>
          <div className="divider"></div>
          <h3 className="section-title">Lipid Profile</h3>
          <div className="form-row">
            <FormGroup type="numeric" label="Total Cholesterol" subText="mg/dL" name="tc" setValue={this.handleInput('tc')} />
            <FormGroup type="numeric" label="HDL Cholesterol" subText="mg/dL" name="hdl" setValue={this.handleInput('hdl')} />
            <FormGroup type="numeric" label="LDL Cholesterol" subText="mg/dL" name="ldl" setValue={this.handleInput('ldl')} />
          </div>
          <div className="form-row">
            <FormGroup type="numeric" label="Systolic Blood Pressure" subText="mm Hg" name="sysBP" setValue={this.handleInput('sysBP')} />
            <FormGroup type="numeric" label="Diastolic Blood Pressure" subText="mm Hg" name="diaBP" setValue={this.handleInput('diaBP')} />
            <div className="spacer"></div>
          </div>
          <div className="divider"></div>
          <h3 className="section-title">Health History</h3>
          <div className="form-row">
            <FormGroup type="bool" label="History of High Cholesterol" name="highCholesterol" setValue={this.handleInput('highCholesterol')} />
            <FormGroup type="choice" label="Smoker" choices={['Non-Smoker', 'Ex-Smoker', 'Smoker']} wide={true} name="smoker" setValue={this.handleInput('smoker')} />
            <div className="spacer"></div>
          </div>
          <div className="form-row">
            <FormGroup type="bool" label="History of Atrial Fibrillation" name="artrialFibrillation" setValue={this.handleInput('artrialFibrillation')} />
            <FormGroup type="bool" label="History of Hypertension" name="hypertension" setValue={this.handleInput('hypertension')} />
            <FormGroup type="bool" label="History of Cardiovascular Disease in Family" wide={true} name="familialCVD" setValue={this.handleInput('familialCVD')} />
          </div>
        </div>
        <input className="submit-button" type="button" value="Submit" onClick={() => console.log(this.state)} />
      </form>
    );
  }
}

export default InfoForm;
