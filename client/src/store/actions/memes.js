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
        console.log(error)
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
        console.log(error)
    }
}

export const updateMeme = (id, meme) => async(dispatch)=>{
    try{
        const {data} = await api.updateMeme(id, meme);
        dispatch({
            type: actions.UPDATE,
            payload: data
        })
    }catch(error){
        console.log(error)
    }
}