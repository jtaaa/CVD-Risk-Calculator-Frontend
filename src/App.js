import React, { Component } from 'react';
import './App.css';

import InfoForm from './components/InfoForm';

import fields from './fields';
import { getScore } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { page: 0 }

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
            onSubmit={ data => getScore(data, true).then(this.setScoreAndToSubmit(data)) } />}
        {this.state.page === 1 &&
        <div>
          <div className="score-message">{ this.state.score.message }</div>
          <div onClick={ this.toFormPage }>Back</div>
        </div>}
      </div>
    );
  }
}

export default App;
