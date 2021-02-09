import React, {  } from "react";
import styles from "./Memes.module.scss";
import Meme from "./Meme/Meme"
import { useSelector } from "react-redux"


const Memes = () => {
    const memes = useSelector(state => state.memes);

    return (
        !memes.length?(<div className={styles.loading}>loading...</div>):(
            <div className={styles.container}>
                {memes.map(meme=>(
                    <div className={styles.memeContainer} key={meme._id}>
                        <Meme meme={meme}/>
                    </div>
                ))}
            </div>
        )
    )
}

export default Memes;