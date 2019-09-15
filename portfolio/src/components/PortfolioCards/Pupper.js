import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Shiba from '../../media/Shiba.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    
  },
});

export default function Pupper() {
  const classes = useStyles();

  return (
    <Card className={classes.card} id ='project-card-pupper'>
  
        <CardMedia
          component="img"
          alt="Shiba Inu Icon"
          height="140"
          image={Shiba}
          title="Pupper"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Pupper
          </Typography>
          <Typography variant="p" color="textSecondary" component="p">
            My very first group project. A colorful and fun dog theme'd website that uses the Giphy and Youtube API.
          </Typography>
        </CardContent>
      <CardActions>
     {/* {BUTTON HERE} */}
      </CardActions>
    </Card>
  );
}