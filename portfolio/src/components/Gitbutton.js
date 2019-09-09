import React from 'react';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-rickiest.css';
import SVG from './Giticon';
import '../App.scss'

function Gitbutton() {
    return (
      <AwesomeButton 
        className ='buttonproperties'
      >
      Github
      </AwesomeButton>
    );
  }

  export default Gitbutton;
  