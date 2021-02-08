import { Reducer } from "redux";
import { ActionTypes, IBasicAnyAction } from './basicActions';
// named export
export interface IBasicState {
    property: any
}

// 按reducer功能对state,action进行处理
const initBasicState: IBasicState = {
    property: null,
}
export const basicReducer: Reducer<IBasicState, IBasicAnyAction> = (
    state = initBasicState,
    action
) => {
    switch ( action.type ) {
        case ActionTypes.ANY: 
            return {
                ...state,
                property: action.property,
            };       
        default:
            return state;
    }
}
