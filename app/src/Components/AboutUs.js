import React from 'react'
import tarek from "../img/tarek.JPG"

export default function AboutUs() {
    return(
        <div className = "aboutUs" id="aboutus">
            <div className = "AbUsImg">
                <svg className = "ellipse" width="361" height="361" viewBox="0 0 361 361" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M361 180.5C361 361 361 361 180.5 361C-7.62939e-05 361 0 361 0 180.5C0 0 0 -2.07424e-05 180.5 1.40631e-08C280.187 1.40631e-08 361 80.8126 361 180.5Z" fill="white"/>
                </svg>
                <svg className = 'bar1' width="35" height="202" viewBox="0 0 35 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="35" height="202" fill="white"/>
                </svg>
                <svg className = 'bar2' width="35" height="202" viewBox="0 0 35 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="35" height="202" fill="white"/>
                </svg>
                <svg className = 'bar3' width="35" height="202" viewBox="0 0 35 202" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="35" height="202" fill="white"/>
                </svg>
                <img className="AboutUsImg" src = {tarek}/>
            </div>
            <div className = "AbUsText">
                <h3 className = "contTitle">
                    About Us
                </h3>
                <p className = "description">
                We are the Awty International School Hackathon Club (Awty Hackclub) that has been accepted and sponsored by a large non-profit, Hack Club. We prepare for and participate in hackathons. We cultivate new members' skills through side projects; said skills are then utilized in Hackathons. We aim to create a community of young developers and entrepreneurs; leveraging teamwork whilst doing so. Our club provides a medium for students to express creativity, elevate ingenuity, and learn skills that they can implement in their future careers.
                </p>
            </div>
            

        </div>
    )
}