import React from 'react';
import './index.css';

import NumericInput from './../NumericInput';
import OptionGroup from './../OptionGroup';
import CheckBox from './../CheckBox';

class InfoForm extends React.Component {
  constructor(props) {
    super(props);

    this.initialState = this.props.fields.reduce((acc, field) => {
        acc.response[field.name] = field.type !== 'checkbox' ? '' : false;
      return acc;
    }, { response: {} });

    this.state = this.initialState;

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(name) {
    return value =>
      this.setState({
        response: { ...this.state.response, [name]: value },
      });
  }

  render() {
    return (
      <form>
        {this.props.fields.map(field => {
          let inputComponent = null;
          const { name, label, type, placeholder = null, options = null } = field;
          switch(type) {
            case 'number': {
              inputComponent = (
                <NumericInput 
                    name={ name }
                    placeholder={ placeholder }
                    value={ this.state.response[name] }
                    handleChange={ this.handleChange(name) } />
              );
              break;
            }
            case 'option': {
              inputComponent = (
                <OptionGroup
                    name={ name }
                    options={ options }
                    value={ this.state.response[name] }
                    handleChange={ this.handleChange(name) } />
              );
              break;
            }
            case 'checkbox': {
              inputComponent = (
                <CheckBox
                    label={ label }
                    name={ name }
                    value={ this.state.response[name] }
                    handleChange={ this.handleChange(name) } />
              );
              break;
            }
            default:
              break;
          }
          return (
            <div key={ name } className="form-group">
              { type !== 'checkbox' && <label htmlFor={ name }>{ label }</label> }
              { inputComponent }
            </div>
          );
        })}
        <button type="button" onClick={ () => console.log(this.state) }>Submit!</button>
      </form>
    );
  }
}

export default InfoForm;
