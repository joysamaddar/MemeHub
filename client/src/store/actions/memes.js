import * as api from "../../api/index";
import * as actions from "./actionTypes"

export const getMemes = (data)=>{
    return {
        type: actions.GET_MEMES,
        payload: data
    }
}

export const initMemes = () => async (dispatch)=>{
    try{
        const { data } = await api.fetchMemes();
        dispatch(getMemes(data))
    }catch(error){
        console.log(error.message)
    }
}


export const createMeme = (meme) => async (dispatch)=>{
    try{
        const { data } = await api.createMeme(meme);
        dispatch({
            type: actions.CREATE,
            payload: data
        })

    }catch(error){
        console.log(error.message)
    }
}