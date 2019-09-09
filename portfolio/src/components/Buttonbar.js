import React from 'react';
import Container from '@material-ui/core/Container';
import Biobutton from './Biobutton'
import Portfoliobutton from './Portfoliobutton'
import Contactbutton from './Contactbutton'
import Linkedinbutton from './Linkedinbutton'
import Gitbutton from './Gitbutton'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../App.scss'


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div id = 'buttonbar' className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} sm={3}>
          <Typography gutterBottom >
            <Link to ='/bio'>
                <Biobutton className ="buttons" />
            </Link>
          </Typography>
          <Typography gutterBottom variant="h3" component="h2">
            <Link to ='/portfolio'>
                <Portfoliobutton className ="buttons"/>
            </Link>
          </Typography>
          <Typography gutterBottom variant="h3" component="h2">
            <Link to ='/contact'>
                <Contactbutton className ="buttons"/>
            </Link>
          </Typography>
          <Typography gutterBottom variant="h3" component="h2">
            <Link to = '/linkedin'>
                <Linkedinbutton className ="buttons"/>
            </Link>
          </Typography>
          <Typography gutterBottom variant="h3" component="h2">
            <Link to = '/github'>
                <Gitbutton className ="buttons"/>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}