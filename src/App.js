import './App.css';
import Header from "./Components/Header";
import Navigation from "./Components/Navigation";
import Profile from "./Components/Profile";


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
