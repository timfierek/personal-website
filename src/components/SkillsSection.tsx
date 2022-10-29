import React from "react";

function SkillsSection() {
    return (
        <div className="skills-section">
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

export default SkillsSection;