import React from "react";
import styles from "./Memes.module.scss";
import Meme from "./Meme/Meme"


const Memes = ()=>{
    return (
        <>
            <h1>Memes</h1>
            <Meme/>
            <Meme/>
        </>
    )
}

export default Memes;