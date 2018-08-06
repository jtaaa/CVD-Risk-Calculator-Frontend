import React, { Component } from 'react';
import './App.css';

import InfoForm from './components/InfoForm';

import fields from './fields';
import { getScore } from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InfoForm fields={ fields } onSubmit={ data => getScore(data).then(res => console.log(res.data)) } />
      </div>
    );
  }
}

export default App;
