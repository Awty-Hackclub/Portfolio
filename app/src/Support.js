import { Route } from "react-router-dom";
import "./App.css";
import Navbar from "./utils/Navbar";
import Twitter from "../public/icons/twitter.svg";
import Github from "../public/icons/github.svg";
import Instagram from "../public/icons/instagram.svg";
import Youtube from "../public/icons/youtube.svg";

export default function Support() {
    return (
        <>
            <Navbar />
            <div className="svg-grid">
                <img src={Twitter} />
                <img src={Github} />
                <img src={Instagram} />
                <img src={Youtube} />
            </div>
        </>
    );
}