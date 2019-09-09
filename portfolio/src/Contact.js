import React from 'react';
import './App.scss';
import { Typography, Divider, Container, List, ListItem, ListItemText, Card, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Resumebutton from './components/Resumebutton'
import Credly from './media/badge.png'


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
  spacing: {
    marginTop: theme.spacing (2)
  },
}));


function Contact() {
  const classes = useStyles();
  return (
    <div>
      {/* PAPER IS THE CONTAINER */}
      <Paper className ={classes.root} id = 'biocontent'>
      {/* FIRST GRID CONTAINER */}
      <Grid container>
      {/* FIRST GRID ROW */}
        <Paper id ='yeet'>
          <Grid item sm={12}>
            <Typography className ='within' type = 'textPrimary' align ='center' >
              <h2>Nicholas Michael Loperena</h2>
            </Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography variant ='p' type ='textSecondary' align ='center' gutterBottom>
            React Web Developer
            </Typography>
          </Grid>
          </Paper>
         <List>
            <ListItem button className = {classes.spacing}>
              Cell: 407-790-5891
              
            </ListItem>
            <Divider varient = 'middle'/>
            <ListItem button className = {classes.spacing} >
              Email: NicholasLoperena@gmail.com
            </ListItem>
            <Divider varient = 'middle'/>
           <br></br>
         </List>
      {/* END OF GRID ROW */}
      <Grid container>
           <Grid item sm ={3}>
                <Resumebutton />
           </Grid>
           <Grid item sm ={9}>
              
                <img src ={Credly} id ='credly' atl= 'credentials' />

           </Grid>
           </Grid>
             

        {/* NEW CONTAINER SO NEW ROW WITHIN PAPER */}
        </Grid>
       </Paper>
    </div>
  );
}

export default Contact;