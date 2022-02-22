import React from 'react';
import '../styles/Footer.css'
import linkedin from '../assets/logos/linkedin.png'
import mobile from '../assets/logos/cellPhone.png'
import email from '../assets/logos/email.png'
import git from '../assets/logos/github2.png'
import myCV from "../assets/cv/cv-Nicolas Aguirre Yacup 2022.pdf"
import whatsapp from "../assets/logos/whtasapp.png"
const Footer = () => {
    return (
        <div id='footer' className='card bg-dark '>
            <div className="container">
                <h1>You can reach me at:</h1>
                <div className="card mb-3"></div>
                <div className="row">
                    <div className="col">
                        <p id='footerInfo' className="container">
                            <img id='imgfooter' src={linkedin} alt="LinkedIn" />: <a href="https://goo.su/9tKY" rel="noopener noreferrer" target="_blank">Nicolas Aguirre Yacup</a> <br />
                            <img id='imgfooter' src={mobile} alt="Mobile Phone" />: (+57) 318-547-0851 <br />
                            <img id='imgfooter' src={whatsapp} alt="WhatsApp" />: <a href="https://walink.co/687925" rel="noopener noreferrer" target="_blank"> (+57) 315-462-7068 </a> <br />
                            {/* https://walink.co/687925 */}

                            <img id='imgfooter' src={email} alt="Email" />: nicolas.aguirre.y@gmail.com <br />
                            <img id='imgfooter' src={git} alt="GitHub" />: <a href="https://github.com/NAY057" rel="noopener noreferrer" target="_blank">NAY057</a><br />
                        </p>
                    </div>
                    <div id='bt_download_col' className="col">
                        <a id='bt_download' type="button" class="btn btn-warning btn-lg" href={myCV} rel="noopener noreferrer" target="_blank" download="CV nicolas aguirre yacup.pdf"><strong>Download CV Here</strong>  </a>
                    </div>
                </div>
                <div class="text-center">
                    <p>Desined with ❤ by Nicolas Aguirre Yacup - 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;