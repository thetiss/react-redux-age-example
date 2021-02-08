/*  Imports from Redux:
 applyMiddleware: Applies middleware to the dispatch method of the Redux store
 combineReducers: Merges reducers into one
 createStore: Creates a Redux store that holds the state tree
 Store: The TS Type used for the store, or state tree
 */
import { createStore, Store, combineReducers, applyMiddleware } from "redux";

/*  Thunk
Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
The thunk can be used to delay the dispatch of an action, 
or to dispatch only if a certain condition is met. 
The inner function receives the store methods dispatch and getState as parameters.
*/
import thunk from "redux-thunk";

/* Import reducers and state type
IBasicState 从reducer来是因为本身在reducer中要使用state
*/
import { IBasicState, basicReducer } from "./basicReducer";

// Create an interface for the application state
export interface IAppState {
    basicState: IBasicState;
};

const rootReducer = () => combineReducers(
    basicReducer
);

const configureState = () => {
    return createStore(rootReducer,undefined,applyMiddleware(thunk));
}
export default configureState;