import React from 'react';
import { Link } from 'react-router-dom'; 

import './css/nav.css'

function Nav() {

  return (
    <div className="Calender">
        <nav>
            <ul className="nav-ul">
                <Link to="/calender" className="nav-link">
                    <li className="nav-li">Calender</li>
                </Link>

                <Link to="/timer" className="nav-link">
                   <li className="nav-li">Timer</li>
                </Link>

                <Link to="/" className="nav-link">
                   <li className="nav-li">Dashboard</li>
                </Link>
           </ul>
        </nav>
    </div>
  );
}

export default Nav;