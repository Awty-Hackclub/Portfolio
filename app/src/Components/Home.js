import React from 'react'
import Typed from 'typed.js';
import home_page_image from '../img/tarek.JPG'

export default function Home() {
    return (
        <div>
            <h1 className="title">We are the Awty Hackclub</h1>
            <img className = "home_page_image" src = {home_page_image}></img>
        </div>
    )
}