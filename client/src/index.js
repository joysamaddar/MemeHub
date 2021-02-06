import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import { Provider} from "react-redux"
import {createStore, compose, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import App from "./App"
import memeReducer from "./store/reducers/memes"

const rootReducer = combineReducers({
    memes: memeReducer
})

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>, 
document.getElementById("root")
);