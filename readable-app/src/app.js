import React, { Component } from 'react';
import HomePage from './components/pages/homepage/index.js';
import * as API from './util/API';

class App extends Component {

  render() {
    return (
      <div>
        <HomePage />
      </div>
    );
  }
}

export default App;
