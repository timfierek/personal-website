import React from "react";
import testImg from "../images/blue-mountain.jpg";

function Project(props: any) {
    const[showInfo, setShowInfo] = React.useState(false);

    return (
        <div className="projects">
            <div className="img-container">
                <img src={testImg} alt="" />
            </div>
            <a href="https://github.com">GitHub</a>
            <h3>Project Title</h3>
            <p>Detailed Information</p>
            <button>Less Info</button>
        </div>
    )
}

export default Project;