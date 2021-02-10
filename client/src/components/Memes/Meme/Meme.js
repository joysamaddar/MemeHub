import React from "react";
import styles from "./Meme.module.scss";
import moment from "moment"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faClock, faTrash, faLaughSquint } from '@fortawesome/free-solid-svg-icons'

const Meme = ({meme, setCurrentId})=>{

    return (
        <div className={styles.meme}>
                <img src={meme.selectedFile} alt={meme.title}/>
                <div className={styles.info}>
                    <p><FontAwesomeIcon icon={faUser} className={styles.icons} />{meme.creator}</p>
                    <p><FontAwesomeIcon icon={faClock} className={styles.icons} />{moment(meme.createdAt).fromNow()}</p>
                </div>
                <div className={styles.editButtonContainer}>
                    <button onClick={()=>setCurrentId(meme._id)}>...</button>
                </div>
                <p className={styles.title}>{meme.title}</p>
                <p className={styles.content}>{meme.content}</p>
                <div className={styles.reactionContainer}>
                    <button className={styles.laughButton} onClick={()=>{}}><FontAwesomeIcon icon={faLaughSquint} className={styles.reactionIcon} />
                    {meme.laughCount} {meme.laughCount>1?'Laughs':'Laugh'}
                    </button>
                    <button className={styles.deleteButton} onClick={()=>{}}><FontAwesomeIcon icon={faTrash} className={styles.reactionIcon} />Delete</button>
                </div>
        </div>
    )
}

export default Meme;