import "./App.css";
import NavBar from "./Components/NavBar";
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Hackathons from './Components/Hackathons'
import Members from './Components/Members'

function App() {
  return (
    <div className="App" id="home">
      <NavBar />
      <Home />
      <div className = "Content">
        <AboutUs />
        <Hackathons />
        <Members />
      </div>
    </div>
  );
}

export default App;
