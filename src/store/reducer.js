import { act } from "react-dom/test-utils";
const idFix = Math.random().toString(16).substr(2, 8);

const initState = {
    age: 21,
    ageHistory: [],
}

const reducer = ( state = initState, action ) => {
    const newState = { ...state };
    switch ( action.type ) {
        case 'AGE_UP':
            newState.age += action.payload.val;
            newState.ageHistory = newState.ageHistory.concat({
                id: idFix+newState.ageHistory.length,
                value: newState.age
            });
            break;
        case 'AGE_DOWN':
            newState.age -= action.payload.val;
            newState.ageHistory = newState.ageHistory.concat({
                id: idFix+newState.ageHistory.length,
                value: newState.age
            });
            break;
        case 'DELETE_AGE_FROM_HISTORY':
            const itemId = action.payload.val;
            newState.ageHistory = newState.ageHistory.filter((item)=> item.id!==itemId);
            break;                    
        default:
            newState.age += 0;                         
    }
    return newState;
};
export default reducer;