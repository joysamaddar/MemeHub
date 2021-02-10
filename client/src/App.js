import React, {useState, useEffect} from "react"
import styles from "./App.module.scss"
import logo from "./assets/images/logo.jpg"
import Memes from "./components/Memes/Memes"
import Form from "./components/Form/Form"
import {useDispatch} from "react-redux"
import {initMemes} from "./store/actions/memes"

const App = ()=>{
    const dispatch = useDispatch()
    const [currentId, setCurrentId] = useState(null);

    useEffect(()=>{
        dispatch(initMemes())
    }, [currentId, dispatch])

    return (
        <div>
            <nav className={styles.nav}>
                <img src={logo} alt="MemeHub"/>
                <h2>MemeHub</h2>
            </nav>
            <main>
                <div className={styles.container}>
                    <div className={styles.container_l}>
                        <Memes setCurrentId={setCurrentId}/>
                    </div>
                    <div className={styles.container_r}>
                        <Form currentId={currentId} setCurrentId={setCurrentId}/>
                    </div>
                </div>
            </main>
            <footer>
                <p>Made with ❤️ by Joy</p>
            </footer>
        </div>
    )
}

export default App