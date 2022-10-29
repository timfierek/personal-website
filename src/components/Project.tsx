import React from "react";

/*  props:
    {
        name: 'Steam Games in Common',
        link: 'https://github.com/timfierek/SteamGamesInCommon',
        img: './images/steam-games-in-common-img.png',
        description: 'Steam Games in Common is a simple to use web application using the Spring Framework and the Valve API to return a list of games that all entered users own. Also supports entering your own steam account and selecting friends to search for games between.',
        skills: [
            'Java',
            'Spring',
            'REST APIs'
        ],
    } 
*/
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
                    <h3>{props.name}</h3>
                    <button onClick={toggleInfo}>
                        <div>
                            {showInfo ? "hide details" : "show details"}
                            {showInfo ? <i className="fa-solid fa-caret-up" /> : <i className="fa-solid fa-caret-down" />}
                        </div>
                    </button>
                </div>

                <a href={props.link}><i className="fa-solid fa-arrow-up-right-from-square" /></a>
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
    )
}

export default Project;