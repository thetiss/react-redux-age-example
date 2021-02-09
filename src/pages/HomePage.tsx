import React, { useState } from "react";
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DogCard from "../components/DogCard";
import SimpleCard from "../components/SimpleCard";

const useStyles = makeStyles({
    root: {
        textAlign: "center",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100vh'
    }
})
const HomePage = () => {
    const classes = useStyles();
    return(
        <Container className={classes.root}>
            <SimpleCard/>
            <DogCard />
        </Container>
    )
}
export default HomePage;