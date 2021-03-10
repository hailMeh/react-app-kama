import './App.css';
import Header from "./Components/header/Header";
import Navigation from "./Components/navigation/Navigation";
import Profile from "./Components/profile/Profile";
import Dialogs from "./Components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import FriendsOnline from "./Components/navigation/FriendsOnlinePage/FriendsOnline";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className="Container">
                <Header/>
                <Navigation state={props.state.NavigationPage} /> }
                <div className={"wrapper-content"}>
                    <Route path='/profile/profile.jsx' render={ () => <Profile state={props.state.ProfilePage} /> } />
                    <Route path='/dialogs/dialogs.jsx' render={ () => <Dialogs state={props.state.DialogPage}/> } />
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
