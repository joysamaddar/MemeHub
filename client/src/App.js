import React from "react"
import styles from "./App.module.scss"
import logo from "./assets/images/logo.jpg"
import Memes from "./components/Memes/Memes"
import Form from "./components/Form/Form"

const App = ()=>{

    
    return (
        <div>
            <nav className={styles.nav}>
                <img src={logo} alt="MemeHub"/>
                <h2>MemeHub</h2>
            </nav>
            <main>
                <div className={styles.container}>
                    <div className={styles.container_l}>
                        <Memes/>
                    </div>
                    <div className={styles.container_r}>
                        <Form/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App