import React from 'react';
import '../styles/Header.css'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div id='nav-container' className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Me</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header