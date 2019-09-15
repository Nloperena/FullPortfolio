import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Pokemon from '../../media/Pokemon.png';

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    
  },
});

export default function Creadventure() {
  const classes = useStyles();

  return (
    <Card className={classes.card} id ='project-card-pupper'>
  
        <CardMedia
          component="img"
          alt="Pokemon"
          height="140"
          image={Pokemon}
          title="Creadventure"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Creadventure
          </Typography>
          <Typography variant="p" color="textSecondary" component="p">
            My second group project. Stricly only a Pokemon battle simulator to display our skills using databases.
          </Typography>
        </CardContent>
      <CardActions>
     {/* {BUTTON HERE} */}
      </CardActions>
    </Card>
  );
}