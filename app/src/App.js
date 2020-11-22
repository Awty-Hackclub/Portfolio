import "./App.css";
import NavBar from "./Components/NavBar";
import Home from './Components/Home'
import AboutUs from './Components/AboutUs'
import Hackathon from './Components/Hackathon'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutUs />
      <Hackathon/>
    </div>  
  );
}

export default App;
