import './App.css';
import Header from "./Components/header/Header";
import Navigation from "./Components/navigation/Navigation";
import Profile from "./Components/profile/Profile";


const App = () => {
  return (
    <div className="Container">
        <Header />
        <Navigation />
        <Profile />
    </div>
  );
}


export default App;
