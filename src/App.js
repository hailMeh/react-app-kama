import './App.css';
import Header from "./Components/header/Header";
import Navigation from "./Components/navigation/Navigation";
import Profile from "./Components/profile/Profile";
import Dialogs from "./Components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";



const App = (props) => {
    return (

            <div className="Container">
                <Header/>
                <Navigation state={props.state.NavigationPage} />
                <div className={"wrapper-content"}>
                    <Route path='/profile/profile.jsx' render={ () => <Profile state={props.state.ProfilePage} addPost={props.addPost} inputLockText={props.state.ProfilePage.inputLockText} updateLockText={props.updateLockText}/> } />
                    <Route path='/dialogs/dialogs.jsx' render={ () => <Dialogs state={props.state.DialogPage} addMessage={props.addMessage}/> } />
                </div>
            </div>

    );
}


export default App;
