import * as actions from "../actions/actionTypes"

const initialState = [];

const reducer = (state = initialState,action)=>{
    switch (action.type){
        case actions.GET_MEMES:
            return action.payload;
        case actions.CREATE:
            return [...state, action.payload];
        case actions.UPDATE:
            return state.map((item)=> item._id === action.payload._id ? action.payload : item);
        case actions.DELETE:
            return state.filter(item=>{
                return item._id !== action.payload._id
            });
        default:
            return state;
    }
}

export default reducer;