import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter, Link } from "react-router-dom";

import PostForm from './components/postform';
import Posts from './components/posts';

import store from './store'

class App extends Component {

  render() {
    const postItems = (<div><ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/PostForm">Post Form</Link>
      </li>
      <li>
        <Link to="/Posts">Posts</Link>
      </li>
    </ul>

      <hr /></div>)

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            {postItems}
            <Switch>
              <Route exact path={"/"} component={PostForm} />
              <Route exact path={"/PostForm"} component={PostForm} />
              <Route exact path={"/Posts"} component={Posts} />
            </Switch>
            {/* <PostForm />
          <Posts /> */}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
