import React, { Component } from 'react';
import './App.css';

import InfoForm from './components/InfoForm';

import fields from './fields';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfoForm fields={ fields }></InfoForm>
      </div>
    );
  }
}

export default App;
