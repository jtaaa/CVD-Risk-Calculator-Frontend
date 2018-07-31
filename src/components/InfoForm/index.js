import React from 'react';
import './index.css';

import NumericInput from './../NumericInput';
import OptionGroup from './../OptionGroup';
import CheckBox from './../CheckBox';

class InfoForm extends React.Component {
  constructor(props) {
    super(props);
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
                    placeholder={ placeholder } />
              );
              break;
            }
            case 'option': {
              inputComponent = (
                <OptionGroup
                    name={ name }
                    options={ options } />
              );
              break;
            }
            case 'checkbox': {
              inputComponent = (
                <CheckBox
                    label={ label }
                    name={ name } />
              );
              break;
            }
            default:
              break;
          }
          return (
            <div key={ name }>
              { type !== 'checkbox' && <label htmlFor={ name }>{ label }</label> }
              { inputComponent }
            </div>
          );
        })}
        <button type="submit">Submit!</button>
      </form>
    );
  }
}

export default InfoForm;
