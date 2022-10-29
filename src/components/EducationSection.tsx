import React from "react";

function EducationSection() {
    return(
        <div className="education-section">
            <div className="education">
                <h1 className="sectionHeader">Education</h1>
                <h3 className="edu-title">Java Software Engineering Bootcamp</h3>
                <h4 className="edu-subtitle">Grand Circus | Detroit, MI | 4.0 GPA</h4>
                <h5 className="edu-duration">March 2022 - September 2022</h5>
                <ul className="edu-bullets">
                    <li>Balanced and prioritized a full-time job in addition to an extensive coding bootcamp.</li>
                    <li>Lead and developed numerous full-stack projects in an agile environment.</li>
                    <li>Gained valuable experience working in a team environment.</li>
                </ul>
            </div>
        </div>
    )
}

export default EducationSection;