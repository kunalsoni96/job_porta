import React, {Component} from 'react';
import { createHashHistory } from "history";
import {Router, Route, Switch} from 'react-router-dom';
import Index from './pages/users/Index.js';
import FindJob from './pages/users/FindJob.js';
import PostJob from './pages/users/PostJob.js';
import About from './pages/users/About.js';
import Contact from './pages/users/Contact.js';
import Select from './pages/users/Select.js';
import Profile from './pages/users/Profile.js';
import EditProfile from './pages/users/EditProfile.js';
const customHistory = createHashHistory();
export default class App extends Component {
  render(){
    return (
      <Router history={customHistory}>
      <div>
        <Switch>
          <Route  path="/" component={Index} exact/>
          <Route  path="/FindJob" component={FindJob} exact/>
          <Route  path="/PostJob" component={PostJob} exact/>
          <Route  path="/About" component={About} exact/>
          <Route  path="/Edit-Profile" component={EditProfile} exact/>
          <Route  path="/Contact" component={Contact} exact/>
          <Route  path="/Select-Employer-or-Candidate" component={Select} exact/>
          <Route  path="/Profile" component={Profile} exact/>
          </Switch>
        </div>
      </Router>
  );  
  }
}


