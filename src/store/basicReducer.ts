import { Reducer } from "redux";
import { ActionTypes, BasicActions } from './basicActions';
// named export
export interface IBasicState {
    property: any
}

// 按reducer功能对state,action进行处理
const initBasicState: IBasicState = {
    property: null,
}
export const basicReducer: Reducer<IBasicState, BasicActions> = (
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
