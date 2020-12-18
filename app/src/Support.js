import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./utils/Navbar";
import Twitter from "./icons/twitter.svg";
import Github from "./icons/github.svg";
import Instagram from "./icons/instagram.svg";
import Youtube from "./icons/youtube.svg";

export default function Support() {
    return (
        <>
            <Navbar />
            <div className="svg-grid">
                <img src = {Twitter} className = "Twitter"></img>
                <img src = {Github} className = "Github"></img>
                <img src = {Instagram} className = "Instagram"></img>
                <img src = {Youtube} className = "Youtube"></img>
            </div>
        </>
    );
}