import React from 'react';
import '../styles/Footer.css'
import phone from '../assets/logos/phone.png'
const Footer = () => {
    return (
        <div id='footer' className='card bg-dark '>
            <div className="container">
                <h1>Contact</h1>
                <div className="card"></div>
                <p className="container">
                    <img id='imgfooter' src={phone} alt="Phone" />: (+57) 318-547-0851 <br />
                    <strong>Role:</strong> Full stack developer <br />
                    <strong>Duration:</strong> months (May 2021 – Today)
                    <br />
                    <strong>Tasks:</strong> python scripting, back-end and
                    front-end web development with asp.net, SQL Server database
                    administration, code documentation and legacy application
                    management.
                </p>
            </div>
        </div>
    );
};

export default Footer;