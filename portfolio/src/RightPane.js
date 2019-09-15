import React, { Component } from 'react';
import  Grid from '@material-ui/core/Grid'
import Bio from './Bio'
import Portfolio from './Portfolio'
import { Switch, Route} from 'react-router-dom';
import Contact from './Contact';


function RightPane() {
    
    return(
            <Grid container>
                <Grid item sm={8}>
                <Route render={({location}) => (
                <Switch location={location}>
                  <Route exact path= '/' component = {Bio} />
                  <Route path= '/bio' component = {Bio} />
                  <Route path= '/portfolio' component = {Portfolio} />
                  <Route path= '/contact' component = {Contact} />
                  <Route path= '/github' component = {() => {
                    window.location.href = 'https://github.com/Nloperena'; return null;
                  }} />
                  <Route path = '/linkedin' component = {() => {
                    window.location.href = 'https://www.linkedin.com/in/nicholas-loperena-022813185/'; return null;
                  }} />
                  <Route path ='/Pupper' component = {() => {
                    window.location.href =  'https://github.com/LeugimAtreides/Pupper'; return null;
                  }} />
                  <Route path ='/Creadventure' component = {() => {
                    window.location.href =  'https://github.com/Nloperena/Creadventure'; return null;
                  }} />
                  <Route path ='/ChatApp' component = {() => {
                    window.location.href =  'https://github.com/Nloperena/ChatApp'; return null;
                  }} />
                  <Route path ='/TheFlowjo' component = {() => {
                    window.location.href =  'https://github.com/Nloperena/The-Flowjo'; return null;
                  }} />
                </Switch>
        )} />
                </Grid>
            </Grid>
        
    )
}

export default RightPane;