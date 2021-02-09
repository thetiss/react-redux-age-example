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
import { IDogState, dogReducer } from "./dogReducer";

/* Create an interface for the application state
The IAppState interface defines what our App’s root state should be. 
only have a basicState prop
*/
export interface IAppState {
    basicState: IBasicState;
};

export interface ISPAForDogState {
    dogState: IDogState;
}
/*
rootReducer 不能再写成arrow function, 否则会报错。
Next, we define our rootReducer , which is a constant that combines all of our reducers into one.
*/
const rootReducer =  combineReducers<IAppState>({
    basicState: basicReducer
});

const spaRootReducer = combineReducers<ISPAForDogState>({
    dogState: dogReducer
})
/* This function is responsible for creating our Store and applying the Thunk middleware.*/
const configureState = (): Store<IAppState, any> => {
    const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
    return store;
}
export default configureState;

// 返回dog store
export const  configureDogState = (): Store<ISPAForDogState, any> => {
    return createStore(spaRootReducer, undefined, applyMiddleware(thunk));
}