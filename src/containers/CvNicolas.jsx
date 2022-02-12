import React from "react";
import "../styles/CvNicolas.css";
import javascript_logo from "../assets/logos/javascript.png";
import css3_logo from "../assets/logos/css3.png";
import typescript_logo from "../assets/logos/typescript.png";
import python_logo from "../assets/logos/python.png";
import csharp_logo from "../assets/logos/csharp.png";
import dart_logo from "../assets/logos/dart.svg";
import html5_logo from "../assets/logos/html5.png";
import jquery_logo from "../assets/logos/jquery.png";
import jira_logo from "../assets/logos/jira.png";
import bitbucket_logo from "../assets/logos/bitbucket.png";
import bootstrap_logo from "../assets/logos/bootstrap.png";
import github_logo from "../assets/logos/github.png";
import sqlserver_logo from "../assets/logos/sqlserver.png";
import mysql_logo from "../assets/logos/mysql.png";
import mongodb_logo from "../assets/logos/mongodb.jpg";
import firebase_logo from "../assets/logos/firebase.png";
import postgresql_logo from "../assets/logos/postgresql.png";

const CvNicolas = () => {
    let timeDiff = Math.abs(
        // Be aware that month index is 0-based. This means that January = 0 and December = 11
        new Date().getTime() - new Date(2021, 4, 3).getTime()
    );
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
                            {/* <br /> */}
                            <div id="infoCard" className="card">
                                <p className="container">
                                    <strong>Entity:</strong> Accenture Colombia <br />
                                    <strong>Role:</strong> Full stack developer <br />
                                    <strong>Duration:</strong> {now} months (May 2021 – Today)
                                    <br />
                                    <strong>Tasks:</strong> python scripting, back-end and
                                    front-end web development with asp.net, SQL Server database
                                    administration, code documentation and legacy application
                                    management.
                                </p>
                            </div>
                            {/* <br /> */}
                            <div id="infoCard" className="card">
                                <p className="container">
                                    <strong>Entity:</strong> Popayán’s City Hall <br />
                                    <strong>Role:</strong> Full stack developer <br />
                                    <strong>Duration:</strong> 11 months (Feb 2020 – Dec 2020)
                                    <br />
                                    <strong>Tasks:</strong> Responsible for the standardization of
                                    the strata database in Popayan city applying data mining
                                    techniques and Developer in charge of the planning, design,
                                    front-end and back-end using Laravel framework and MySQL in
                                    the development of the web platform for the stratification
                                    office of the Popayan City Hall (
                                    <a href="http://insitu.popayan.gov.co:9501" rel="noopener noreferrer" target="_blank">proyect here</a>
                                    ).
                                </p>
                            </div>
                            {/* <br /> */}
                            <div id="infoCard" className="card">
                                <p className="container">
                                    <strong>Entity:</strong> Atix digital s.a.s <br />
                                    <strong>Role:</strong> Mobile developer <br />
                                    <strong>Duration:</strong> (2 months Dec 2019 – Jan 2020)
                                    <br />
                                    <strong>Tasks:</strong> front-end and back-end development
                                    with flutter, firebase management and administration, the app
                                    name was Lalavanderie.
                                </p>
                            </div>
                        </section>
                        <section id="education">
                            <h1>Education</h1>
                            <div className="card"></div>
                            <div id="infoCard" className="card">
                                <p className="container">
                                    <strong>Corporación Universitaria Autonoma Del Cauca</strong><br />
                                    <strong>Location:</strong> Popayán - Cauca, Colombia <br />
                                    <strong>Degree:</strong> System Engineer <br />
                                    <strong>Duration:</strong> 2014 – 2019  <br />
                                    {/* <strong>Recognitions:</strong> Graduated with honors (identification of patterns in government datasets: A case study of thefts and traffic accidents in colombia), also winner of the <a href="https://cutt.ly/hO36aMX"> ACOFI award(pag-315)</a> in 2018 and co-founder of the data mining research group SIMD. */}
                                    <strong>Recognitions:</strong> Graduated with honors (identification of patterns in government datasets: A case study of thefts and traffic accidents in colombia), also winner of the <a href="https://cutt.ly/hO36aMX" rel="noopener noreferrer" target="_blank"> ACOFI award(pag-315)</a> in 2018 and co-founder of the data mining research group SIMD.
                                    <br />
                                    <strong>Publications: </strong>Article published in (IJBIDM) International Journal of Business Intelligence and Data Mining. <a href="https://www.inderscienceonline.com/doi/10.1504/IJBIDM.2021.118186" rel="noopener noreferrer" target="_blank"> Article here</a>


                                </p>
                            </div>
                        </section>
                    </div>
                    <div className="col">
                        <section id="skllis">
                            <h1>Skills</h1>
                            <div className="card"></div>
                            <div id="infoCard" className="card">
                                <div className="container">
                                    <strong>Programming:</strong>
                                    <div className="skillsCardPro">
                                        {/* javascript */}
                                        <figure id="figureContainer">
                                            <img
                                                src={javascript_logo}
                                                className="skillsImg"
                                                alt="Javascript"
                                                title="Javascript"
                                            />
                                            <figcaption>Javascript</figcaption>
                                        </figure>

                                        {/* Typescript */}
                                        <figure id="figureContainer">
                                            <img
                                                src={typescript_logo}
                                                className="skillsImg"
                                                alt="Typescript"
                                                title="Typescript"
                                            />
                                            <figcaption>Typescript</figcaption>
                                        </figure>

                                        {/* Python */}
                                        <figure id="figureContainer">
                                            <img
                                                src={python_logo}
                                                className="skillsImg"
                                                alt="Python"
                                                title="Python"
                                            />
                                            <figcaption>Python</figcaption>
                                        </figure>

                                        {/* c# */}
                                        <figure id="figureContainer">
                                            <img
                                                src={csharp_logo}
                                                className="skillsImg"
                                                alt="C#"
                                                title="C#"
                                            />
                                            <figcaption>Csharp</figcaption>
                                        </figure>

                                        {/* Dart */}
                                        <figure id="figureContainer">
                                            <img
                                                src={dart_logo}
                                                className="skillsImg"
                                                alt="Dart"
                                                title="Dart"
                                            />
                                            <figcaption>Dart</figcaption>
                                        </figure>

                                        {/* Jquery */}
                                        <figure id="figureContainer">
                                            <img
                                                src={jquery_logo}
                                                className="skillsImg"
                                                alt="Jquery"
                                                title="Jquery"
                                            />
                                            <figcaption>Jquery</figcaption>
                                        </figure>

                                        {/* Html5 */}
                                        <figure id="figureContainer">
                                            <img
                                                src={html5_logo}
                                                className="skillsImg"
                                                alt="Html5"
                                                title="Html5"
                                            />
                                            <figcaption>Html5</figcaption>
                                        </figure>

                                        {/* css3 */}
                                        <figure id="figureContainer">
                                            <img
                                                src={css3_logo}
                                                className="skillsImg"
                                                alt="CSS-3"
                                                title="CSS-3"
                                            />
                                            <figcaption>CSS-3</figcaption>
                                        </figure>

                                        {/* Bootstrap */}
                                        <figure id="figureContainer">
                                            <img
                                                src={bootstrap_logo}
                                                className="skillsImg"
                                                alt="Bootstrap"
                                                title="Bootstrap"
                                            />
                                            <figcaption>Bootstrap</figcaption>
                                        </figure>

                                        {/* Git and Github */}
                                        <figure id="figureContainer">
                                            <img
                                                src={github_logo}
                                                className="skillsImg"
                                                alt="git and github"
                                                title="git and github"
                                            />
                                            <figcaption>Github</figcaption>
                                        </figure>

                                        {/* Bitbucket */}
                                        <figure id="figureContainer">
                                            <img
                                                src={bitbucket_logo}
                                                className="skillsImg"
                                                alt="Bitbucket"
                                                title="Bitbucket"
                                            />
                                            <figcaption>Bitbucket</figcaption>
                                        </figure>

                                        {/* Jira */}
                                        <figure id="figureContainer">
                                            <img
                                                src={jira_logo}
                                                className="skillsImg"
                                                alt="Jira"
                                                title="Jira"
                                            />
                                            <figcaption>Jira</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                            <div id="infoCard" className="card">
                                <div className="container">
                                    <strong>DataBases:</strong>
                                    <div className="skillsCardDb">
                                        {/* MySQL */}
                                        <figure id="figureContainer">
                                            <img
                                                src={mysql_logo}
                                                className="skillsImg"
                                                alt="MySQL"
                                                title="MySQL"
                                            />
                                            <figcaption>MySQL</figcaption>
                                        </figure>

                                        {/* SQLServer */}
                                        <figure id="figureContainer">
                                            <img
                                                src={sqlserver_logo}
                                                className="skillsImg"
                                                alt="SQLServer"
                                                title="SQLServer"
                                            />
                                            <figcaption>SQLServer</figcaption>
                                        </figure>

                                        {/* PostgreSQL */}
                                        <figure id="figureContainer">
                                            <img
                                                src={postgresql_logo}
                                                className="skillsImg"
                                                alt="PostgreSQL"
                                                title="PostgreSQL"
                                            />
                                            <figcaption>PostgreSQL</figcaption>
                                        </figure>

                                        {/* FireBase */}
                                        <figure id="figureContainer">
                                            <img
                                                src={firebase_logo}
                                                className="skillsImg"
                                                alt="FireBase"
                                                title="FireBase"
                                            />
                                            <figcaption>FireBase</figcaption>
                                        </figure>

                                        {/* MongoDB */}
                                        <figure id="figureContainer">
                                            <img
                                                src={mongodb_logo}
                                                className="skillsImg"
                                                alt="MongoDB"
                                                title="MongoDB"
                                            />
                                            <figcaption>MongoDB</figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="languages">
                            <h1>Languages</h1>
                            <div className="card"></div>
                            <div id="infoCard" className="card">
                                <p className="container">
                                    <strong>English: </strong> Advanced <br />
                                    <strong>Spanish:</strong> Native <br />
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default CvNicolas;
