import "./App.css";
import Navbar from "./utils/Navbar";
import groupPhoto from "./img/groupPhoto.png";

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
          <p className = "paragraph">
            We are the Awty International School Hackathon Club (Awty Hackclub). We
            cultivate new members' skills through side projects; said skills are
            then implemented in Hackathons. We aim to create a community of young
            developers and entrepreneurs; leveraging teamwork whilst doing so. Our
            club provides a medium for students to express creativity, elevate
            ingenuity, and learn skills that they can implement in their future
            careers.
          </p>
          <img src = {groupPhoto} className = "photo"></img>
      </div>
    </>
  );
}

export default App;
