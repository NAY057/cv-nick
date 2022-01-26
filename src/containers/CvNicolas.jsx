import React from 'react';
import '../styles/CvNicolas.css'

const CvNicolas = () => {
    return (
        <div id='container'>
            <div className="row">
                <img id='myImage' src="../assets/images/me.jpg" alt="" />
                <div id='containerTextName'>
                <span id='textBox' class="border border-dark fs-1 fw-bold">Nicolas Aguirre Yacup
                
                </span>
                </div>
            </div>
            <div className="row">
                <section>
                    <span>Experiencia</span>
                </section>
                <section>
                    <span>educacion</span>
                </section>
            </div>
        </div>
    );
};

export default CvNicolas;