import React from 'react';import Container from '@material-ui/core/Container';
import Biobutton from './Biobutton'
import Portfoliobutton from './Portfoliobutton'
import Contactbutton from './Contactbutton'
import Linkinbutton from './Linkinbutton'
import Gitbutton from './Gitbutton'
import { Link } from 'react-router-dom'




function Buttonbar(){
    return (
        <div className = 'buttonbar'>
            <div className = 'buttons'>
                <Link to ='/bio'>
                <Biobutton className ="buttons" />
                </Link>
                <Link to ='/portfolio'>
                <Portfoliobutton className ="buttons"/>
                </Link>
                <Link to ='/contact'>
                <Contactbutton className ="buttons"/>
                </Link>
                <Link>
                <Linkinbutton className ="buttons"/>
                </Link>
                <Link>
                <Gitbutton className ="buttons"/>
                </Link>
            </div>
        </div>
           
      );
}
  
    


export default Buttonbar;
