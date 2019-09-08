import React, { Component } from 'react';
import ButtonBar from './components/Buttonbar'
import  Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Container from '@material-ui/core/Container'


function LeftPane() {
    
    

    return(
            <Grid container>
                <Grid item sm = {3}>
                    <ButtonBar id = 'buttonbar' />
                </Grid>
            </Grid>
        
    )
}

export default LeftPane;