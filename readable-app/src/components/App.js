import React, { Component } from 'react';
import Nav from './Nav';
import PostList from './PostList';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className="container">
          <div className="row">
            <PostList/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
