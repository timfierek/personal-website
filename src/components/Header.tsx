import React from "react";

function Header(props: any) {
    return (
        <nav>
            <div className="nav-buttons">
                <button onClick={props.navigateHome}>Home</button>
                <button>About Me</button>
                <button>Experience</button>
                <button>Projects</button>
            </div>
        </nav>
    )
}

export default Header;