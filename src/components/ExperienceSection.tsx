import React from "react";

function ExperienceSection() {
    return(
        <div className="experience-section">
            <div className="experience">
                <h1>Experience</h1>
                <h3 className="job-title">Jr. Software Development Engineer - Amazon</h3>
                <h4 className="job-duration">November 2022 - Present</h4>
                <ul className="job-bullets">

                </ul>
            </div>

            <div className="education">
                <h1>Education</h1>
                <h3 className="edu-title">Java Software Engineering Bootcamp</h3>
                <h4 className="edu-subtitle">Grand Circus | Detroit, MI | 4.0 GPA</h4>
                <h5 className="edu-duration">March 2022 - September 2022</h5>
                <ul className="edu-bullets">
                    <li>Balanced and prioritized a full-time job in addition to an extensive coding bootcamp.</li>
                    <li>Lead and developed numerous full-stack projects in an agile environment.</li>
                    <li>Gained valuable experience working in a team environment.</li>
                </ul>
            </div>

            <div className="skills">
                <h1>Skills</h1>
                <div className="skills--backend">
                    <h4>Back End</h4>
                    <ul>
                        <li>Java</li>
                        <li>Spring</li>
                        <li>REST APIs</li>
                        <li>RESTful web services</li>
                    </ul>
                </div>
                <div className="skills--frontend">
                    <h4>Front End</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>TypeScript</li>
                        <li>React</li>
                        <li>JSP and JSTL</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div className="skills--databaseServer">
                    <h4>Database, Server</h4>
                    <ul>
                        <li>SQL</li>
                        <li>MySQL</li>
                        <li>MongoDB</li>
                        <li>AWS</li>
                    </ul>
                </div>
                <div className="skills--software">
                    <h4>Software/Tools</h4>
                    <ul>
                        <li>Git/GitHub</li>
                        <li>Visual Studio Code</li>
                        <li>Eclipse IDE</li>
                        <li>Postman</li>
                        <li>Figma</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection;