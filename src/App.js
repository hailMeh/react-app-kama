import './App.css';
import Header from "./Components/header/Header";
import Navigation from "./Components/navigation/Navigation";
import Profile from "./Components/profile/Profile";
import Dialogs from "./Components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="Container">
                <Header/>
                <Navigation/>
                <div className={"wrapper-content"}>
                    <Route path='/profile/profile.jsx' render={ () => <Profile PostData={props.PostData} /> } />
                    <Route path='/dialogs/dialogs.jsx' render={ () => <Dialogs MessagesData={props.MessagesData} DialogsData={props.DialogsData}/> } />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
