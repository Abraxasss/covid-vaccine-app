import React from "react";
import {Link} from "react-router-dom";
import '../styles/NavStyle.css'

export default function Navbar() {
    return (
        
            <nav>
                <ul>
                    <li>
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/screens/DosesScreen.js">Dosi</Link>
                    </li>
                </ul>
            </nav>
        
    )
}
