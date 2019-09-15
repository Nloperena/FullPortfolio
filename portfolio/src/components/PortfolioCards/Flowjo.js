import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dojo from '../../media/dojo.png';

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    
  },
});

export default function Flowjo() {
  const classes = useStyles();

  return (
    <Card className={classes.card} id ='project-card'>
  
        <CardMedia
          component="img"
          alt="Dojo Icon"
          height="140"
          image={Dojo}
          title="Dojo"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            The Flowjo
          </Typography>
          <Typography variant="p" color="textSecondary" component="p">
            The Flowjo is a freestyle rap game that uses the same mechanics and rules as Kahoot.
          </Typography>
        </CardContent>
      <CardActions>
     {/* {BUTTON HERE} */}
      </CardActions>
    </Card>
  );
}