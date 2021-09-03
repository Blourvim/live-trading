const initialState= []
const reducer =(
    state = initialState,
    action)=>{

    switch (action.type) {
        case "UPDATE_ORDERS":
            return ({...state, new:action.payload })
            break;
        default:
            return state
    }
}

export default reducer;