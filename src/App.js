import React, { Component } from 'react';
import './App.css';

import InfoForm from './components/InfoForm';

import fields from './fields';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfoForm fields={ fields } onSubmit={ res => console.log(res) } />
      </div>
    );
  }
}

export default App;
