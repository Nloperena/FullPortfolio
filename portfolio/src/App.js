import React, { Component } from 'react';

import './App.scss';
import Container from '@material-ui/core/Container';
import Buttonbar from './components/Buttonbar'
import { Button } from '@material-ui/core';
import Dashboard from './components/Dashboard';
import Bio from './Bio'
import Portfolio from './Portfolio'
import ButtonAppBar from './components/ButtonAppBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
  
  render() {
  return(
    <Router>
      <div className="App">
        <ButtonAppBar />
        <Buttonbar />

        <Route render={({location}) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path= '/' component = {Home} />
                <Route path= '/bio' component = {Bio} />
                <Route path= '/portfolio' component = {Portfolio} />
                <Route path= '/contact' component = {Contact} />
              </Switch>
          </CSSTransition>
        </TransitionGroup>
      )} />

      
      </div>
    </Router>
  )};
}

export default App;
