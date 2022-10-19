import React from "react";

function Landing() {
    return (
        <div className="landing">
            <div className="icons">
                <a href="https://www.linkedin.com/in/tim-fierek/">
                    <i className="fa-brands fa-linkedin-in" />
                </a>
                <a href="https://github.com/timfierek">
                    <i className="fa-brands fa-github" />
                </a>
            </div>
            <div className="row-container">
                <button className="vertical-button" id="left-button">
                    <p>Skills and Work Experience <i className="fa-solid fa-caret-up" /></p>
                </button>
                <div className="center-text">
                    <h3>Hi, I'm</h3>
                    <h1>Tim Fierek</h1>
                    <h2>(Software Engineer)</h2>
                </div>
                <button className="vertical-button" id="right-button">
                    <p><i className="fa-solid fa-caret-down" /> Projects</p>
                </button>
            </div>
            <button className="horizontal-button">
                <p>Who am I?</p>
                <i className="fa-solid fa-caret-down" />
            </button>
        </div>
    )
}

export default Landing;