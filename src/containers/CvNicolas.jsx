import React from "react";
import "../styles/CvNicolas.css";

const CvNicolas = () => {
    let timeDiff = Math.abs(new Date().getTime() - new Date(2021, 5, 3).getTime());
    let now = Math.round(timeDiff / (2e3 * 3600 * 365.25));
  return (
    <div id="container">
      <div id="containerImg" className="row">
        <img id="myImage" src="../assets/images/me.jpg" alt="" />
        <div id="containerTextName" className="border border-dark fs-2 fw-bold">
          <span id="textBox">
            Nicolas Aguirre Yacup
            <br />
            <h2>Software Developer</h2>
            <br />
            <p className="container" id="aboutMe">
              I do really love to learn new technologies and things every day, I
              have the ability to work in team or individually with a good
              stress management and pretty well disciplined, always focused in
              scientific research and development of scalable applications under
              the methodology of analysis, design and programming based on
              objects with experience in the main stages of the software
              development process, such as, definition of requirements,
              analysis, design and implementation oriented to objects, model
              view controller, tests and maintenance, all of this, always with
              the consideration of SOLID and TDD.
            </p>
          </span>
        </div>
      </div>
      <div id="infoSection" className="container bg-dark">
        <div id="" className="row">
          <div className="col">
            <section id="experience">
              {/* <span>Experiencia</span> */}
              <h1>Experience</h1>
              <div className="card"></div>
              <br />
              <div id="expInfo" className="card">
                <p className="container">
                <strong>Entity:</strong> Accenture Colombia <br />
                <strong>Role:</strong> Full stack developer <br />
                <strong>Duration:</strong> {now} months (May 2021 – Today) <br />
                <strong>Tasks:</strong> python scripting, back-end and front-end web development with asp.net, SQL Server database administration, code documentation and legacy application management.
                </p>
              </div>
              {/* <br /> */}
              <div id="expInfo" className="card">
                <p className="container">
                <strong>Entity:</strong> Popayán’s City Hall  <br />
                <strong>Role:</strong> Full stack developer <br />
                <strong>Duration:</strong> 11 months (Feb 2020 – Dec 2020) <br />
                <strong>Tasks:</strong> Responsible for the standardization of the strata database in Popayan city applying data mining techniques and Developer in charge of the planning, design, front-end and back-end using Laravel framework and MySQL in the development of the web platform for the stratification office of the Popayan City Hall ( <a href="http://insitu.popayan.gov.co:9501">proyect here</a> ).
                </p>
              </div>
              {/* <br /> */}
              <div id="expInfo" className="card">
                <p className="container">
                <strong>Entity:</strong> Atix digital s.a.s <br />
                <strong>Role:</strong> Mobile developer  <br />
                <strong>Duration:</strong> (2 months Dec 2019 – Jan 2020)  <br />
                <strong>Tasks:</strong> front-end and back-end development with flutter, firebase management and administration, the app name was Lalavanderie.
                </p>
              </div>
            </section>
          </div>
          <div className="col">
            <section id="educaion">
              {/* <span>educacion</span> */}
              <h1>Education</h1>
              <div className="card"></div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvNicolas;
