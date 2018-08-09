import React, { Component } from 'react';
import './App.css';

import InfoForm from './components/InfoForm';

import fields from './fields';
import { getScore } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.setScore            = this.setScore.bind(this);
    this.setScoreAndToSubmit = this.setScoreAndToSubmit.bind(this);
  }

  setScore(score)            { this.setState({ score }); }
  setScoreAndToSubmit(score) { this.setScore(score); }

  render() {
    return (
      <div className="App">
        <InfoForm 
            fields={ fields }
            onSubmit={ data => getScore(data, true).then(this.setScoreAndToSubmit(data)) } />
      </div>
    );
  }
}

export default App;
