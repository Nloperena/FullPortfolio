import React from 'react';
import './App.scss';
import { Typography, Divider, Container, List, ListItem, ListItemText, Card, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Flowjo from './components/PortfolioCards/Flowjo';
import ChatApp from './components/PortfolioCards/Chatapp';
import Pupper from './components/PortfolioCards/Pupper';
import Creadventure from './components/PortfolioCards/Creadventure';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  spacing: {
    marginTop: theme.spacing (1)
  },
}));


function Portfolio() {
  const classes = useStyles();
  return (
    <div>
      {/* PAPER IS THE CONTAINER */}
      <Paper className ={classes.root} id = 'portfolio-content'>
      {/* FIRST GRID CONTAINER */}
      <Grid container>
      {/* FIRST GRID ROW */}
        <Paper id ='portfolio-header'>
          <Grid item sm={12}>
            <Typography className ='within' type = 'textPrimary' align ='center' >
              <h2>Portfolio</h2>
            </Typography>
          </Grid>
          </Paper>


          {/* FIRST ROW */}

          <Grid item sm = {6}>
         <List>
            <ListItem button className = {classes.spacing}>
              <Pupper />
              
            </ListItem>
            <Divider varient = 'middle'/>
            <ListItem button className = {classes.spacing} >
              <ChatApp />
            </ListItem>
            
           <br></br>

          {/* SECOND ROW */}
         </List>
         </Grid>
          <Grid item sm = {6}>
         <List>
            <ListItem button className = {classes.spacing}>
              <Creadventure />
              
            </ListItem>
            <Divider varient = 'middle'/>
            <ListItem button className = {classes.spacing} >
              <Flowjo />
            </ListItem>
         </List>
         </Grid>
      {/* END OF GRID ROW */}
             

        {/* NEW CONTAINER SO NEW ROW WITHIN PAPER */}
        </Grid>
       </Paper>
    </div>
  );
}

export default Portfolio;