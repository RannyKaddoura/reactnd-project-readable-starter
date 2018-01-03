import React, { Component } from 'react';
import DefaultPage from './components/DefaultPage';
import * as API from './util/API';

class App extends Component {

  render() {
    return (
      <div>
        <DefaultPage />
      </div>
    );
  }
}

export default App;
