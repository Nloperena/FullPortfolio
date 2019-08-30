import React from 'react';
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/themes/theme-rickiest.css';
import SVG from './Giticon';

function Gitbutton() {
    return (
      <AwesomeButton 
        size="large" 
        primary="instagram"
      >
      Github
      </AwesomeButton>
    );
  }

  export default Gitbutton;
  