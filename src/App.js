import React, { Component } from 'react';
import './App.css';

import InfoForm from './components/InfoForm';
import Header from './components/Header';
import ScoreCard from './components/ScoreCard';

import fields from './fields';
import { getScore } from './actions';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { page: 0, score: {} };

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
        <Header />
        <div className="body">
          <div className="side-info">
            <h3>About</h3>
            <p>This app calculates your risk of having a cardiovascular disease.</p>
            <h3>Algorithm</h3>
            <p>Created by Professor Amelia Hosein at UTT, the algorithm...</p>
            <h3>Target Population</h3>
            <p>Caribbean adults from age 18 to 75 who are not pregnant.</p>
            <h3>How to get Cholestoral Levels</h3>
            <p>See your doctor to get a lipid profile and your blood pressure readings.</p>
            {this.state.score.value &&
            <ScoreCard value={this.state.score.value} message={this.state.score.message} />}
          </div>
          <div className="small-screen-spacer"></div>
          <div className="info-form">
            <InfoForm
                fields={ fields }
                submit={ data => getScore(data, true).then(({ data: score }) => { console.log(this.state); this.setScoreAndToSubmit(score) }).catch(e => console.log(e)) } />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
