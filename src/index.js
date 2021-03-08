import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let PostData = [
    {id: 1, post: 'Hello', likesCounter: 12},
    {id: 2, post: 'How are you today?', likesCounter: 22},
    {id: 3, post: 'Ok', likesCounter: 3},
    {id: 4, post: 'Morning', likesCounter: 4},

]
let MessagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you today?'},
    {id: 3, message: 'Ok'},
    {id: 4, message: 'Morning'},

]
let DialogsData = [
    {id: 1, person: 'Josh'},
    {id: 2, person: 'Fred'},
    {id: 3, person: 'Chris'},
    {id: 4, person: 'Amilie'},
    {id: 5, person: 'Steve'},
    {id: 6, person: 'Daizy'},
    {id: 7, person: 'Maria'},
]

ReactDOM.render(
    <React.StrictMode>
        <App PostData={PostData} MessagesData={MessagesData} DialogsData={DialogsData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
