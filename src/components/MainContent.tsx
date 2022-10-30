import React from "react";
import AboutSection from './AboutSection';
import ContactForm from "./ContactForm";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import Header from "./Header";

function MainContent(props: any) {
    return (
        <div className="main-content">
            <Header navigateHome={props.navigateHome} />
            <div id="about">
                <AboutSection />
            </div>
            <div id="contact">
                <ContactForm />
            </div>
            <div id="experience">
                <ExperienceSection />
            </div>
            <SkillsSection />
            <EducationSection />
            <div id="projects">
                <ProjectSection />
            </div>
        </div>
    )
}

export default MainContent;