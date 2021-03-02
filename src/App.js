import './App.css';
import Header from "./Components/header/Header";
import Navigation from "./Components/navigation/Navigation";
import Profile from "./Components/profile/Profile";
import Dialogs from "./Components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {
    return (
        <BrowserRouter>
            <div className="Container">
                <Header/>
                <Navigation/>
                <div className={"wrapper-content"}>
                    <Route path='/profile/profile.jsx' component={Profile}/>
                    <Route path='/dialogs/dialogs.jsx' component={Dialogs}/>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
