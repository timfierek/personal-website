import React from "react";
import AboutSection from './AboutSection';
import ContactForm from "./ContactForm";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import ProjectSection from "./ProjectSection";
import SkillsSection from "./SkillsSection";
import Header from "./Header";

function MainContent(props: any) {
    const aboutRef = React.useRef(null);
    const experienceRef = React.useRef(null);
    const projectsRef = React.useRef(null);

    function scrollTo(ref : any) {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        });
    }

    return(
        <div className="main-content">
            <Header 
                navigateHome={props.navigateHome} 
                scrollTo={scrollTo}
                aboutRef={aboutRef}
                experienceRef={experienceRef}
                projectsRef={projectsRef}
            />
            <div ref={aboutRef}>
                <AboutSection />
            </div>
            <ContactForm />
            <div ref={experienceRef}>
                <ExperienceSection />
            </div>
            <SkillsSection />
            <EducationSection />
            <div ref={projectsRef}> 
                <ProjectSection /> 
            </div>
        </div>
    )
}

export default MainContent;