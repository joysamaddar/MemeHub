import React from "react";
import styles from "./Memes.module.scss";
import Meme from "./Meme/Meme"


const Memes = ()=>{
    return (
        <div className={styles.memes}>
            <Meme/>
            <Meme/>
        </div>
    )
}

export default Memes;