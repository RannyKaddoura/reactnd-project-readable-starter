import React, { Component } from 'react';
import DefaultPage from './components/DefaultPage';
import * as API from './util/API';

class App extends Component {

  state = {
    categories : []
  };

  componentDidMount(){
    API
      .getCategories()
      .then(result => {
        this.setState({
          categories : result
        })
      })
  }


  render() {
    return (
      <div>
        <DefaultPage categories={this.state.categories} />
      </div>
    );
  }
}

export default App;
