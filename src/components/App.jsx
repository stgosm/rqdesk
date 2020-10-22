import React from 'react';
import '../css/App.css';
import Requirements from './Requirements';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        paddingTop: '5vh',
        paddingBottom: '5vh',
    },
});

function App() {
    const classes = useStyles();

    return (
        <>
            <Container maxWidth="lg" className={ classes.root } >
                <Grid container spacing={5} alignContent='center' alignItems='center'>
                    <Requirements />
                </Grid>  
            </Container>
        </>
    )
  }
  
  export default App;