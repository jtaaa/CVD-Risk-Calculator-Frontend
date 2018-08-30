import React from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import './index.css';

import NumericInput from './../NumericInput';
import OptionGroup from './../OptionGroup';
import CheckBox from './../CheckBox';
import FormGroup from './../FormGroup';

import ErrorMessages from './ErrorMessages';
import validate from './validate';

class InfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      age:                { value: '', valid: true, errorMessage: '' },
      sex:                { value: '', valid: true, errorMessage: '' },
      married:            { value: '', valid: true, errorMessage: '' },
      ethnicity:          { value: '', valid: true, errorMessage: '' },
      education:          { value: '', valid: true, errorMessage: '' },
      tc:                 { value: '', valid: true, errorMessage: '' },
      hdl:                { value: '', valid: true, errorMessage: '' },
      ldl:                { value: '', valid: true, errorMessage: '' },
      sysBP:              { value: '', valid: true, errorMessage: '' },
      diaBP:              { value: '', valid: true, errorMessage: '' },
      highCholesterol:    { value: '', valid: true, errorMessage: '' },
      smoker:             { value: '', valid: true, errorMessage: '' },
      atrialFibrillation: { value: '', valid: true, errorMessage: '' },
      hypertension:       { value: '', valid: true, errorMessage: '' },
      familialCVD:        { value: '', valid: true, errorMessage: '' },
    };

    this.handleInput  = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(name) {
    return value => {
      if (!this.state[name].valid) {
        const newResponseState = validate(name, value);
        this.setState({ [name]: newResponseState });
      } else {
        this.setState({ [name]: { value, valid: true, errorMessage: '' } });
      }
    };
  }

  handleSubmit() {
    const validationResult = Object.keys(this.state).reduce((acc, cur) => {
      acc.newState[cur] = validate(cur, this.state[cur].value);
      acc.responses[cur] = acc.newState[cur].value;
      acc.valid = acc.valid && acc.newState[cur].valid;
      return acc;
    }, { newState: {}, responses: {}, valid: true });
    this.setState(validationResult.newState, () => console.log(this.state));
    if (validationResult.valid) {
      this.props.submit(validationResult.responses);
      console.log(validationResult.responses);
    }
  }

  render() {
    return (
      <form className="full-form">
        <div className="fields-container">
          <h3 className="section-title">General Information</h3>
          <div className="form-row">
            <FormGroup
                type="numeric"
                label="Current Age"
                name="age" 
                setValue={this.handleInput('age')}
                responseState={this.state.age} />
            <FormGroup
                type="choice" 
                label="Sex" 
                choices={['Male', 'Female']} 
                name="sex" 
                setValue={this.handleInput('sex')}
                responseState={this.state.sex}  />
            <FormGroup
                type="bool" 
                label="Married" 
                name="married" 
                setValue={this.handleInput('married')} 
                responseState={this.state.married} />
          </div>
          <div className="form-row">
            <FormGroup 
                type="choice" 
                label="Ethnicity" 
                choices={['Afro-Caribbean', 'Indo-Caribbean', 'Mixed-Caribbean']} 
                wide={true} 
                name="ethnicity"
                setValue={this.handleInput('ethnicity')}
                responseState={this.state.ethnicity} />
            <FormGroup 
                type="choice" 
                label="Level of Education" 
                choices={['Pre-Secondary', 'Secondary', 'Tertiary']} 
                wide={true} 
                name="education"
                setValue={this.handleInput('education')}
                responseState={this.state.education} />
          </div>
          <div className="divider"></div>
          <h3 className="section-title">Lipid Profile</h3>
          <div className="form-row">
            <FormGroup 
                type="numeric" 
                label="Total Cholesterol" 
                subText="mg/dL" 
                name="tc" 
                setValue={this.handleInput('tc')}
                responseState={this.state.tc} />
            <FormGroup 
                type="numeric" 
                label="HDL Cholesterol" 
                subText="mg/dL" 
                name="hdl" 
                setValue={this.handleInput('hdl')}
                responseState={this.state.hdl} />
            <FormGroup 
                type="numeric" 
                label="LDL Cholesterol" 
                subText="mg/dL" 
                name="ldl" 
                setValue={this.handleInput('ldl')}
                responseState={this.state.ldl} />
          </div>
          <div className="form-row">
            <FormGroup 
                type="numeric" 
                label="Systolic Blood Pressure" 
                subText="mm Hg" 
                name="sysBP" 
                setValue={this.handleInput('sysBP')}
                responseState={this.state.sysBP} />
            <FormGroup 
                type="numeric" 
                label="Diastolic Blood Pressure" 
                subText="mm Hg" 
                name="diaBP" 
                setValue={this.handleInput('diaBP')}
                responseState={this.state.diaBP} />
            <div className="spacer"></div>
          </div>
          <div className="divider"></div>
          <h3 className="section-title">Health History</h3>
          <div className="form-row">
            <FormGroup 
                type="bool" 
                label="History of High Cholesterol" 
                name="highCholesterol" 
                setValue={this.handleInput('highCholesterol')}
                responseState={this.state.highCholesterol} />
            <FormGroup 
                type="choice" 
                label="Smoker" 
                choices={['Non-Smoker', 'Ex-Smoker', 'Smoker']} 
                wide={true} 
                name="smoker" 
                setValue={this.handleInput('smoker')}
                responseState={this.state.smoker} />
            <div className="spacer"></div>
          </div>
          <div className="form-row">
            <FormGroup 
                type="bool" 
                label="History of Atrial Fibrillation" 
                name="atrialFibrillation" 
                setValue={this.handleInput('atrialFibrillation')}
                responseState={this.state.atrialFibrillation} />
            <FormGroup 
                type="bool" 
                label="History of Hypertension" 
                name="hypertension" 
                setValue={this.handleInput('hypertension')}
                responseState={this.state.hypertension} />
            <FormGroup 
                type="bool"
                label="History of Cardiovascular Disease in Family" 
                wide={true} 
                name="familialCVD" 
                setValue={this.handleInput('familialCVD')}
                responseState={this.state.familialCVD} />
          </div>
        </div>
        <input className="submit-button" type="button" value="Submit" onClick={this.handleSubmit} />
      </form>
    );
  }
}

export default InfoForm;
