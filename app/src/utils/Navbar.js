import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><a className = "AwtyHackclub" href = "./"><h1 className = 'AwtyHackclub'>Awty Hackclub</h1></a></li>
                <li><button>Projects</button></li>
                <li><a className = "SupportPage" href = "..\src\Support.js"><button>Support Us</button></a></li>
            </ul>
            <hr></hr>
        </div>
    )
}