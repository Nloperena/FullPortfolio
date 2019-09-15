import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Biobutton from './Biobutton'
import Portfoliobutton from './Portfoliobutton'
import Contactbutton from './Contactbutton'
import Linkedinbutton from './Linkedinbutton'
import Gitbutton from './Gitbutton'
import { Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    textAlign: 'center',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
            <Link to ='/bio'>
                <Biobutton className ="buttons" />
            </Link>
            <Link to ='/portfolio'>
                <Portfoliobutton className ="buttons"/>
            </Link>
            <Link to ='/contact'>
                <Contactbutton className ="buttons"/>
            </Link>
            <Link to = '/linkedin' target='_blank'>
                <Linkedinbutton className ="buttons"/>
            </Link>
            <Link to = '/github' target ='_blank'>
                <Gitbutton className ="buttons"/>
            </Link>
        </Container>
      </AppBar>
    </div>
  );
}