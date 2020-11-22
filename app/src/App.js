import "./App.css";
import NavBar from "./Components/NavBar";
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Hackathons from './Components/Hackathons'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <div className = "Content">
        <AboutUs />
        <Hackathons />
      </div>
    </div>
  );
}

export default App;
