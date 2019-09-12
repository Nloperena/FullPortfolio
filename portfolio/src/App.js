import React, { Component } from 'react';

import './App.scss';
import Container from '@material-ui/core/Container';
import Buttonbar from './components/Buttonbar'
import { Button, AppBar } from '@material-ui/core';
import Dashboard from './components/Dashboard';
import Bio from './Bio'
import Portfolio from './Portfolio'
import ButtonAppBar from './components/ButtonAppBar';
import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import SimpleContainer from './Portfolio'
import Grid from '@material-ui/core/Grid'
import LeftPane from './LeftPane'
import Video from './components/video';


class App extends Component {
  
  render() {

    return(
        
        <div className="App">
         <Video>
          
          </Video>
          <ButtonAppBar />
          <Dashboard />
          
          


         
        </div>
    )};
}

export default App;
