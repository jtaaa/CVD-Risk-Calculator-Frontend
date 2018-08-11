import React, { Component } from 'react';
import './App.css';

import InfoForm from './components/InfoForm';

import fields from './fields';
import { getScore } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { page: 0, score: {} }

    this.toFormPage          = this.toFormPage.bind(this);
    this.toSubmittedPage     = this.toSubmittedPage.bind(this);
    this.setScore            = this.setScore.bind(this);
    this.setScoreAndToSubmit = this.setScoreAndToSubmit.bind(this);
  }

  toFormPage()               { this.setState({ page: 0 }); }
  toSubmittedPage()          { this.setState({ page: 1 }); }
  setScore(score)            { this.setState({ score   }); }
  setScoreAndToSubmit(score) { this.setScore(score); this.toSubmittedPage(); }

  render() {
    return (
      <div className="App">
        {this.state.page === 0 &&
        <InfoForm
            header="Cardiovascular Disease Risk Calculator" 
            fields={ fields }
            onSubmit={ data => getScore(data, true).then(res => this.setScoreAndToSubmit(res)) } />}
        {this.state.page === 1 &&
        <div className="score-card">
          <div className="score-message">{ this.state.score.message }</div>
          <button onClick={ this.toFormPage }>Back</button>
        </div>}
      </div>
    );
  }
}

export default App;
