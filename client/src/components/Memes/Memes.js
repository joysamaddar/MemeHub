import React, { useEffect } from "react";
import styles from "./Memes.module.scss";
import Meme from "./Meme/Meme"
import {useSelector} from "react-redux"


const Memes = ()=>{
    const memes = useSelector(state=> state.memes);

    useEffect(()=>{
        console.log(memes)
    },[memes])

    return (
        <div className={styles.memes}>
            <Meme/>
            <Meme/>
        </div>
    )
}

export default Memes;