import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateLockText, addMessage, updateLockTextDialogs} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export let updateRenderTree = (state) => {

    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} updateLockText={updateLockText} addMessage={addMessage}
                     updateLockTextDialogs={updateLockTextDialogs}/>
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}
