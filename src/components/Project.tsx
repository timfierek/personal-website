import React from "react";

function Project(props: any) {
    const [showInfo, setShowInfo] = React.useState(false);
    const projSkills = props.skills.map((skill: any) => {
        return (<li>{skill}</li>)
    })

    function toggleInfo() {
        setShowInfo(prevVal => (!prevVal))
    }

    return (
        <div className="project">
            <div className="img-container">
                <img src={props.img} alt="" />
            </div>

            <div className="base-info">
                <div>
                    <div className="title-and-link">
                        <h3>{props.name}</h3>
                        <a href={props.link}><i className="fa-solid fa-arrow-up-right-from-square" /></a>
                    </div>
                    <button onClick={toggleInfo}>
                        <div>
                            {showInfo ? "hide details" : "show details"}
                            {showInfo ? <i className="fa-solid fa-caret-up" /> : <i className="fa-solid fa-caret-down" />}
                        </div>
                    </button>
                </div>

            
                {showInfo &&
                <div className="details">
                    <p className="description">{props.description}</p>
                    <div>
                        <p className="list-title">Skills Demonstrated:</p>
                        <ul>
                            {projSkills}
                        </ul>
                    </div>
                </div>
            }
            </div>

            
        </div>
    )
}

export default Project;