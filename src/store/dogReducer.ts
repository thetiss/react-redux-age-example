import { Reducer } from "redux";
import { DogActionTypes, DogActions } from "./dogActions";

/* 先写action，可根据各action中，payload来决定state的属性有哪些

*/
export interface IDogState {
    img: string;
    loading: boolean;
    errorMessage: string;
};

const initDogState = {
    img: '',
    loading: false,
    errorMessage: '',
};
/* naming switch cases for each of our DogActionTypes. 
Each case will return the appropriate payload to update our components. 
*/
export const dogReducer: Reducer<IDogState, DogActions> = (
    state = initDogState,
    action
) => {
    switch (action.type) {
        case DogActionTypes.RANDOM_DOG: {
            return {
                ...state,
                img: action.img
            };
        }
        case DogActionTypes.LOAD_DOG: {
            return {
                ...state,
                loading: action.loading
            }
        }
        case DogActionTypes.ERROR: {
            return {
                ...state,
                errorMessage: action.errorMessage
            }
        }
        default:
            return state;
    }
};
