import React, { Component } from 'react';
import  Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import Bio from './Bio'
import Portfolio from './Portfolio'
import { Switch, Route} from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';


function RightPane() {
    
    return(
            <Grid container>
                <Grid item sm={8}>
                <Route render={({location}) => (
                <Switch location={location}>
                  <Route exact path= '/' component = {Home} />
                  <Route path= '/bio' component = {Bio} />
                  <Route path= '/portfolio' component = {Portfolio} />
                  <Route path= '/contact' component = {Contact} />
                  <Route path= '/github' component={() => {
                    window.location.href = 'https://github.com/Nloperena'; return null;
                  }} />
                  <Route path = '/linkedin' component = {() => {
                    window.location.href = 'https://www.linkedin.com/in/nicholas-loperena-022813185/'; return null;
                  }} />
                </Switch>
        )} />
                </Grid>
            </Grid>
        
    )
}

export default RightPane;