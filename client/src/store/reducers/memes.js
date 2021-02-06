import * as actions from "../actions/actionTypes"

const initialState = [];

const reducer = (state = initialState,action)=>{
    switch (action.type){
        case actions.GET_MEMES:
            return action.payload;
        case actions.CREATE:
            return [...state, action.payload];
        default:
            return state;
    }
}

export default reducer;