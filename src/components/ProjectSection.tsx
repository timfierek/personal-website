import React from "react";
import Project from "./Project";
import data from "../data";

function ProjectSection() {
    const projElements = data
        .sort((a, b) => (a.order < b.order) ? -1 : 1)
        .map((project) => {
            return (
                <Project
                    name={project.name}
                    link={project.link}
                    img={project.img}
                    description={project.description}
                    skills={project.skills}
                />
            )
        })

    return (
        <div className="project-section">
            <h1 className="sectionHeader">Projects</h1>
            {projElements}
        </div>
    )
}

export default ProjectSection;