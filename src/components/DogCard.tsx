import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import { CardMedia, CircularProgress } from '@material-ui/core';
import { CardContent } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { ISPAForDogState } from "../store/store";
import { LoadDogAction } from "../store/dogActions";

const useStyles = makeStyles({
    root: {
        minWidth: 500,
        minHeight: 500,
    },
    cardContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40%'
    },
    image: {
        height: 0,
        paddingTop: '0%'
    },
    img: {
        width: 500,
        height: 500
    }     
});

const DogCard = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const dogImg = useSelector((state: ISPAForDogState) => state.dogState.img);
    const isLoading = useSelector((state: ISPAForDogState) => state.dogState.loading);
    const errorMsg = useSelector((state: ISPAForDogState) => state.dogState.errorMessage);
    const cardImage = ( url: string ) => 
        <CardMedia className={classes.image}>
            <img 
                src={url} 
                onLoad={() => dispatch(LoadDogAction(false))} 
                // onLoad事件来到时，触发action告知store，images已加载完成
                className={classes.img}
                alt='doggie'
            />
        </CardMedia>;
    const cardError = ( msg: string ) => <Typography color='error'> { msg } </Typography>;
    
    return(
        <Card className={classes.root}>
            { dogImg ? cardImage(dogImg) : ''}
            {/* 当图片未显示时，空白框要怎样显示 */}
            <CardContent className={classes.cardContent}>
                { !isLoading && !errorMsg && !dogImg ? 'Waiting for……' : ''}
                { isLoading ? <CircularProgress color='primary' size='80px'></CircularProgress> : ''}
                { errorMsg ? cardError(errorMsg) : ''}
            </CardContent>
        </Card>
    )
}
export default DogCard;