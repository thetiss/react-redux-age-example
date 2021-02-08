const initState = {
    age: 21,
}

const reducer = ( state = initState, action ) => {
    const newState = { ...state };
    switch (action.type) {
        case 'AGE_UP':
            console.log("in reducer"+action.type);
            newState.age += action.payload.val;
            console.log(action.payload.val);
            console.log("new age"+newState.age);
            break;
        case 'AGE_DOWN':
            console.log("in reducer"+action.type);
            newState.age -= action.payload.val;
            console.log(action.payload.val);
            console.log("new age"+newState.age);
            break;
        default:
            newState.age += 0;                         
    }
    return newState;
};
export default reducer;