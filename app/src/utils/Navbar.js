import React from 'react'

export default function Navbar() {
    return (
        <div className="navbar">
            <ul>
                <li><a className = "AwtyHackclub" href = "./"><h1 className = 'AwtyHackclub'>Awty Hackclub</h1></a></li>
                <li><button>Projects</button></li>
                <li><button>Support Us</button></li>
            </ul>
            <hr></hr>
        </div>
    )
}