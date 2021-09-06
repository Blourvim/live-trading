const initialState= []
const reducer =(
    state = initialState,
    action)=>{

    switch (action.type) {
        case "UPDATE_ORDERS":
            return ({...state, new:action.payload })
        default:
            return state
    }
}

export default reducer;