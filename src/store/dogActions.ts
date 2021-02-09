import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IDogState } from "./dogReducer";

/* first define the Types of actions that can happen to our redux store
*/
export enum DogActionTypes {
    RANDOM_DOG = 'RANDOM_DOG',
    LOAD_DOG = 'LOAD_DOG',
    ERROR = 'ERROR',
}
/* define what each action should return using TypeScript interfaces. 
 Notice that all actions must have the type property
*/
export interface IRandomDogAction {
    type: DogActionTypes.RANDOM_DOG;
    img: string;
}

export interface ILoadDogAction {
    type: DogActionTypes.LOAD_DOG;
    loading: boolean;
}

export interface IErrorAction {
    type: DogActionTypes.ERROR;
    errorMessage: string;
}

export type DogActions = IRandomDogAction | ILoadDogAction | IErrorAction;

export const RandomDogAction: ActionCreator<ThunkAction< Promise<any>, IDogState,  null, IRandomDogAction>> = ( dogBreed: string ) => {
    return async ( dispatch: Dispatch ) => {
        try {
            let result = await (await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`)).json();
            if ( result.status !== 'success' )
             throw new Error(result.message);
            dispatch({
                type: DogActionTypes.RANDOM_DOG,
                img: result.message
            })
        } catch (err) {
            console.log('in dogAction');
            console.log(err);
            dispatch({
                type: DogActionTypes.LOAD_DOG,
                loading: false
            });
            dispatch({
                type: DogActionTypes.ERROR,
                errorMessage: err.message,
            });                      
        }
    }
}

export const LoadDogAction: ActionCreator<ThunkAction< Promise<any>, IDogState,  null, ILoadDogAction>> = ( shouldLoading: boolean ) => {
    return async ( dispatch: Dispatch ) => {
        try {
            dispatch({
                type: DogActionTypes.LOAD_DOG,
                loading: shouldLoading
            })
        } catch (err) {
            console.log('in dogAction');
            console.log(err);                   
        }
    }
}