import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Chat from '../../media/chat.png';
import { Link } from 'react-router-dom';
import CodeButton from '../Codebutton';

const useStyles = makeStyles({
  card: {
    maxWidth: 200,
    
  },
});

export default function ChatApp() {
  const classes = useStyles();

  return (
    <Card className={classes.card} id ='project-card'>
  
        <CardMedia
          component="img"
          alt="Instant Messaging"
          height="140"
          image={Chat}
          title="Chat App"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            Chat App
          </Typography>
          <Typography variant="p" color="textSecondary" component="p">
            A full binary chat connection. Connect 2 or more people to chat. Once closed all messages will dissapear.
          </Typography>
        </CardContent>
      <CardActions>
      <Link to ='ChatApp' target = '_blank'>
      <CodeButton />
      </Link>
      </CardActions>
    </Card>
  );
}