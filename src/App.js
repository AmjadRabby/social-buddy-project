import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import PostDetails from './components/PostDetails/PostDetails';
import NoMatch from './components/NoMatch/NoMatch';
import Appbar from './components/Appbar/Appbar';

function App() {
  return (
    <div>
      <Appbar/>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/home">
            <Home/>
          </Route>         
          <Route path="/post/:postId">
            <PostDetails/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
