import React, {useState} from "react";
import styles from "./Form.module.scss"
import FileBase from "react-file-base64"
import {useDispatch} from "react-redux"
import {createMeme} from "../../store/actions/memes"

const Form = ()=>{
    const [memeData, setMemeData] = useState({
        creator: "", title: "", content: "", selectedFile: ""
    })

    const dispatch = useDispatch()
    
    const submitHandler = (e)=>{
        e.preventDefault();
        dispatch(createMeme(memeData))
    }

    const clear = ()=>{
    
    }

    return (
        <div className={styles.form}>
            <form autoComplete="off" noValidate onSubmit={submitHandler}>
                <h3>SHARE A MEME</h3>
                <label htmlFor="creator">
                    <input placeholder="Username" type="text" id="creator" name="creator" value={memeData.creator} onChange={(e)=>setMemeData({...memeData, creator: e.target.value})}/>
                </label>
                <label htmlFor="title">
                    <input placeholder="Title" type="text" id="title" name="title" value={memeData.title} onChange={(e)=>setMemeData({...memeData, title: e.target.value})}/>
                </label>
                <label htmlFor="content">
                    <input placeholder="Content" type="text" id="content" name="content" value={memeData.content} onChange={(e)=>setMemeData({...memeData, content: e.target.value})}/>
                </label>
                <div className={styles.fileInput}>
                        <FileBase classname={styles.FileBase}
                            type="file"
                            multiple={false}
                            onDone={({base64})=> setMemeData({...memeData, selectedFile: base64})}
                        />
                </div>
                <div className="buttons">
                    <button className={styles.buttonSubmit} type="submit">SUBMIT</button>
                    <button className={styles.buttonClear} onClick={clear}>CLEAR</button>
                </div>
            </form>        
        </div>
    )
}

export default Form;