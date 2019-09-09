import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MyAvatar from './components/MyAvatar'
import Nico from './media/Nico.jpg'
import Grid from '@material-ui/core/Grid'
import { withTheme } from '@material-ui/styles';


const useStyles = makeStyles({

  
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card id= 'biocontent'>
      <br></br>
       <Grid container>
         <Grid item sm={6}>
           <br></br>
           <Typography  align ='center'>
             Nicholas Loperena
           </Typography>
         </Grid>
         <Grid item sm={6}>
          
             <MyAvatar id ='me' src ={Nico} />
         </Grid>
         <Grid container id ='component-content'>
         <Grid item sm={10} align = 'center'>
           <Typography variant= 'p' align = 'center'>
           Web Developer with a background in interior design and pharmacy. Educated and developed my skills at the University of Central Florida Ed  in HTML, CSS, Javascript and other technologies. Strong critical thinking skills, visual and a people person. Personal strengths in style, creativity, determination and maintaining a positive attitude.
           </Typography>
         </Grid>
         </Grid>
       </Grid>
       <br></br>
    </Card>
    
  );
}