import React from "react";
import AboutSection from './AboutSection';
import ContactForm from "./ContactForm";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";

function MainContent(props: any) {
    return(
        <div className="main-content">
            <AboutSection />
            <ContactForm />
            <ExperienceSection />
            <SkillsSection />
            <EducationSection />
            <ProjectSection />
        </div>
    )
}

export default MainContent;