import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { IBasicState } from "./basicReducer";

export enum  ActionTypes {
    ANY = 'ANY',
}

export interface IBasicAnyAction {
    type: ActionTypes.ANY;
    property: any; // 即payload
}
/*
export type BasicActions = IBasicAnyAction is our type definition for all actions pertaining to the BasicComponent.
相当于给IBasicAnyAction起别名叫BasicActions，在basicReducer里会用到他
*/
export type BasicActions = IBasicAnyAction; 

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const BasicActions: ActionCreator<ThunkAction< Promise<any>, IBasicState, null, IBasicAnyAction>>  = () => {
    return async ( dispatch: Dispatch) => {
        try {
            dispatch({
                type: ActionTypes.ANY,
                property: null
            })
        } catch (err) {
            console.log('in BasicActions');            
            console.log(err);            
        }
    }
}