import React, { Component } from 'react';

import './App.scss';
import Dashboard from './components/Dashboard';
import ButtonAppBar from './components/ButtonAppBar';
import Video from './components/video';



class App extends Component {
  
  render() {

    return(
        
        <div className="App"> 
            <Video />
            <ButtonAppBar />
            <Dashboard />
        </div>
    )};
}

export default App;
