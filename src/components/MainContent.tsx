import React from "react";
import AboutSection from './AboutSection';
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";

function MainContent(props: any) {
    return(
        <div className="main-content">
            <AboutSection />
            <ExperienceSection />
            <ProjectSection />
        </div>
    )
}

export default MainContent;