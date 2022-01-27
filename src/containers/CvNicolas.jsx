import React from 'react';
import '../styles/CvNicolas.css'

const CvNicolas = () => {
    return (
        <div id='container'>
            <div id='containerImg' className="row">
                <img id='myImage' src="../assets/images/me.jpg" alt="" />
                <div id='containerTextName' className="border border-dark fs-2 fw-bold">
                <span id='textBox'>Nicolas Aguirre Yacup
                <br />
                <h2>Software Developer</h2>
                </span>
                </div>
            </div>
            <div className="container bg-dark">
                <div id='' className="row">
                    <div className="col">
                        <section id='experiancia'>
                            {/* <span>Experiencia</span> */}
                            <h1>Experience</h1>
                        </section>
                    </div>
                    <div className="col">
                        <section id='educaion'>
                            {/* <span>educacion</span> */}
                            <h1>Education</h1>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CvNicolas;