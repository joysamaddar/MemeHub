import axios from "axios";

const url = "http://localhost:5000/memes";

export const fetchMemes = ()=>axios.get(url);

export const createMeme = (newMeme)=>axios.post(url, newMeme);