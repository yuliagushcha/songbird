import React, { Component } from 'react';
import Header from './components/header/header';
import Question from './components/questionBox/question';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Question />
      </div>
    )
  }
}

export default App;
