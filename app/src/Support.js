import "./App.css";
import Navbar from "./utils/Navbar";
import Twitter from "./icons/twitter.jsx";
import Github from "./icons/github.jsx";
import Instagram from "./icons/instagram.jsx";
import Youtube from "./icons/youtube.jsx";

export default function Support() {
  return (
    <>
      <Navbar />
      <div className="svg-grid">
        <div className="circle">
          <a href="https://twitter.com/ahackclub" target="blank_">
            <Twitter class="icon" />
          </a>
        </div>
        <div className="circle">
          <a href="https://github.com/Awty-Hackclub" target="blank_">
            <Github class="icon" />
          </a>
        </div>
        <div className="circle">
          <a href="https://www.instagram.com/awty_hackclub/" target="blank_">
            <Instagram class="icon" />
          </a>
        </div>
        <div className="circle">
          <a
            href="https://www.youtube.com/channel/UCTGj8v4qphvnnC22TX3jenA"
            target="blank_"
          >
            <Youtube class="icon" />
          </a>
        </div>
      </div>
    </>
  );
}
