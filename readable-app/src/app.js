import React, { Component } from 'react';
import HomePage from './components/pages/homepage/index';
import Post from './components/pages/post/index';
import EditPost from './components/pages/post/edit';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/new" component={EditPost} />
            <Route exact path="/:category" component={HomePage} />
            <Route exact path="/:category/:post" component={Post} />
            <Route exact path="/:category/:post/edit" component={EditPost} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
