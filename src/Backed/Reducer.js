export const initialState = {
    user : null,
}

export const actionTypes = {
    SET_USER : "SET_USER"
}

const reducer =  (state, action) => { //{ type, payload }
    switch (action.type) {

    case actionTypes.SET_USER:                    
        return { ...state, user : action.user} //...payload

    default:
        return state
    }
}

export default reducer;
