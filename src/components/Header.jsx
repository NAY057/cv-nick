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
        

            <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
                <h5 class="text-white h4">Menu</h5>
                {/* <span class="text-muted">Toggleable via the navbar brand.</span> */}
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
            </div>
            <nav id='nav_btn_burguer' class="navbar navbar-dark bg-dark">
            <div class="container-fluid">
                <button id='btn_burguer' class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </div>
            </nav>


        </nav>

        
        
    );
};

export default Header