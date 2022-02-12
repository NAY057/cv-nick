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
                        <a className="nav-link" href="#experience">Experience</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#skllis">Skills</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#education">Education</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#languages">Languages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#footer">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header