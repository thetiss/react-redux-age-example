import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { CardHeader, TextField, CircularProgress } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { ISPAForDogState } from "../store/store";
import { LoadDogAction, RandomDogAction } from "../store/dogActions";

const useStyles = makeStyles({
    root: {
        width: 275,
        height: 275,
        alignSelf: 'middle',
        justifySelf: 'start'
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '2vh'
    },
    button: {
        marginTop: '10px',
        height: '7vh',
        width: '90%'
    },
    input: {
        width: '90%'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },  
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});


const SimpleCard = ( ) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    //the dogName property isn't going to be used anywhere else, so there's no need to hold it on the redux store
    const [ dogName, setDogName ] = useState< String | null>('');
    /* here we watch for the loading prop in the redux store. every time it gets updated, our component will reflect it
    作用类似于redux里subscribe    
    */
    const isLoading = useSelector((state: ISPAForDogState) => state.dogState.loading);

    const getDog = () => {
        dispatch(LoadDogAction(true));
        dispatch(RandomDogAction(dogName));
    }
    return(
        <Card className={classes.root}>
            <CardHeader title={<Typography variant='h5' component='h2'>Find Doggie</Typography>}></CardHeader>
                <CardContent className={classes.content}>
                    <TextField 
                        onChange={(e) => setDogName(e.target.value)}
                        className={classes.input}
                        label='type a dog breed'
                        variant='outlined'
                    />
                <Button
                    onClick={() => getDog()}
                    className={classes.button}
                    variant='contained'
                    size='large'
                    color='primary'
                >
                    { isLoading ? <CircularProgress color='secondary'></CircularProgress> :<Typography>get {dogName} here</Typography>}
                </Button>
                </CardContent>
        </Card>
    )
};
export default SimpleCard;