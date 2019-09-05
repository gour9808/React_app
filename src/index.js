import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route , Redirect} from "react-router-dom";

import  HomeView  from './components/views/Home';
import user from './components/views/user';
import { NestedView } from './components/views/Nested';
import { NavBar } from './components/shared/navBar';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index'
import thunk from 'redux-thunk';
import postDetailView from './components/views/postDetailView';
import UserDetailView from './components/views/UserDetailView';
import PrivateRoute from './components/views/PrivateRoute';
import { LoginPage } from './components/views/Login';

const store  = createStore(reducers,  applyMiddleware(thunk));

class App extends Component {
  render() {
    return (
        <Provider store = {store}> 
      <BrowserRouter>
        <div>
          <NavBar />
          <Redirect from = '/' to = '/posts' />
          <PrivateRoute exact path="/posts" component={HomeView} />
          <Route path="/login" component={LoginPage} />

          <Route exact path="/posts/:id" component={postDetailView} />
          <Route path="/users" component={user} />
          <Route path="/user/:id" component={UserDetailView} />
          <Route path="/nested" component={NestedView} />
        </div>
      </BrowserRouter>
        </Provider>
    );
  }
}

render(<App />, document.getElementById('root'));
