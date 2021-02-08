import React from "react";
import styles from "./Meme.module.scss";
import moment from "moment"

const Meme = ({meme})=>{

    return (
        <div className={styles.meme}>
                <img src={meme.selectedFile} alt={meme.title}/>
                <div>
                    <p>{meme.creator}</p>
                    <p>{moment(meme.createdAt).fromNow()}</p>
                </div>
                <div>
                    <button onClick={()=>{}}>button</button>
                </div>
                <div>{meme.title}</div>
                <div>{meme.content}</div>
                <div>
                    <button onClick={()=>{}}>Laugh {meme.laughCount}</button>
                    <button onClick={()=>{}}>Delete</button>
                </div>
        </div>
    )
}

export default Meme;