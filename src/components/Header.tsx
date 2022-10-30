import React from "react";

function Header(props: any) {
    const [showMenu, setShowMenu] = React.useState(true)
    
    function handleClick() {
        setShowMenu(prev => (!prev))
    }

    return (
        <nav style={{backgroundColor: showMenu ? 'rgba(0, 0, 0, .75)' : 'rgba(0, 0, 0, .0)'}}>
            <div className="nav-buttons">
                <button onClick={handleClick}>
                    <i className={showMenu ? "fa-solid fa-angle-up" : "fa-solid fa-angle-down"}/>
                </button>
            </div>
            <ul className={`menu`} style={{display: showMenu ? 'inline' : 'none'}}>
                <li><button onClick={props.navigateHome}>Home</button></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
        </nav>
    )
}

export default Header;