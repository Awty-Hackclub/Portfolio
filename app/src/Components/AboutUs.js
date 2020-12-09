import React from 'react';  
import Tarek from '../img/tarek.JPG'

export default function AboutUs() {
    return (
        <div className="about_us">
            <h1>About Us</h1>
            <p>We are the Awty International School Hackathon Club (Awty Hackclub). We cultivate new members' skills through side projects; said skills are then implemented in Hackathons. We aim to create a community of young developers and entrepreneurs; leveraging teamwork whilst doing so. Our club provides a medium for students to express creativity, elevate ingenuity, and learn skills that they can implement in their future careers.</p>
            <img src={Tarek} alt="Tarek Codes" className = "tarekjpg"></img>
        </div>
    )
}