import { Route } from "react-router-dom";
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
                <div className = "circle"><Twitter class = "icon"/></div>
                <div className = "circle"><Github class = "icon"/></div>
                <div className = "circle"><Instagram class = "icon"/></div>
                <div className = "circle"><Youtube class = "icon"/></div>
            </div>
        </>
    );
}