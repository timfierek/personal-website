import React from "react";

function Header() {
    return (
        <div className="header">
            <div className="nav-buttons">
                <button>Home</button>
                <button>About Me</button>
                <button>Experience</button>
                <button>Projects</button>
            </div>
            <div className="icons">
                <a href="https://www.linkedin.com/in/tim-fierek/">
                    <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="https://github.com/timfierek">
                    <i className="fa-brands fa-github" />
                </a>
            </div>
        </div>
    )
}

export default Header;