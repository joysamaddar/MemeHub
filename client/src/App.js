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
                <div className="grid">
                    <div className="grid-item">
                        <Memes/>
                    </div>
                    <div className="grid-item">
                        <Form/>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App