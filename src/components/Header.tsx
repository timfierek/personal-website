import React from "react";

function Header(props: any) {
    return (
        <nav>
            <div className="nav-buttons">
                <button onClick={props.navigateHome}>Home</button>
                <button onClick={() => props.scrollTo(props.aboutRef)}>About Me</button>
                <button onClick={() => props.scrollTo(props.experienceRef)}>Experience</button>
                <button onClick={() => props.scrollTo(props.projectsRef)}>Projects</button>
            </div>
        </nav>
    )
}

export default Header;