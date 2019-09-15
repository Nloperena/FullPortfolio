import React, { Component } from 'react';
import ButtonBar from './components/Buttonbar'
import  Grid from '@material-ui/core/Grid'


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