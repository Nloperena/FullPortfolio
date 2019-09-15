import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import MyAvatar from './components/MyAvatar'
import Nico from './media/Nico.jpg'
import Grid from '@material-ui/core/Grid'
import { withTheme } from '@material-ui/styles';
import Atom from './media/logo192.png';

const useStyles = makeStyles({

  
});

export default function MediaCard() {

  return (
    <Card id= 'bio-content'>
      <br></br>
      {/* FIRST ROW */}
       <Grid container>
         <Grid item sm={6}>
           <br></br>
           <Typography  align ='center'>
           <h1>Nicholas 
             (Nico) Loperena</h1>
           </Typography>
         </Grid>
         <Grid item sm={6}>
             <MyAvatar id ='me' src ={Nico} />
         </Grid>
  
      {/* SECOND ROW   */}
         <Grid container id ='component-content'>
         <Grid item sm={9} align = 'center'>
           <Typography variant= 'body1' align = 'center'>
           Web Developer with a background in interior design and pharmacy. Educated and developed my skills at the University of Central Florida Ed  in HTML, CSS, Javascript and other technologies. Strong critical thinking and people skills. Personal strengths in style, creativity, determination and maintaining a positive attitude.
           </Typography>
         </Grid>
         <Grid item sm = {3} >
           <img src = {Atom} id ='atom' align ='center' />
           </Grid>
         </Grid>
         </Grid>
       <br></br>
    </Card>
    
  );
}