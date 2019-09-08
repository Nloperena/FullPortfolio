import React from 'react';
import Buttonbar from './Buttonbar'
import Content from './Content'
import Grid from '@material-ui/core/Grid'
import LeftPane from '../LeftPane'
import RightPane from '../RightPane'
import Container from '@material-ui/core/Container'


export default function Dashboard() {

        return (
         <Container>
            <Grid container >
              <Grid item sm={3}>
                <LeftPane />
              </Grid>
              <Grid item sm={9}>
                <RightPane />
              </Grid>
            </Grid>
        </Container>
        
            
          )
  
}

