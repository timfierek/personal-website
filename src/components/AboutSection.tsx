import React from "react";
import headshot1 from '../images/pfp1.jpg';
import headshot2 from '../images/pfp2.jpg';

function AboutSection() {
    const [pfp, setPfp] = React.useState(headshot1);

    function flipPfp() {
        if(pfp == headshot1) setPfp(headshot2);
        else setPfp(headshot1)
    }

    return(
        <div className="about-section">
            <div className="headshot-container">
                <img src={pfp} alt="" className="headshot-img" onClick={flipPfp}/>
            </div>
            <div className="info-container">
                <p>Welcome to my site, <br /><br />I'm Tim Fierek, a Software Engineer based in Michigan, USA.
                    My favorite place to work is on the backend; I have multiple years of experience with Java,
                    and am well versed in Spring, MongoDB, SQL, AWS. I'm extremely interested in fintech and 
                    decentralized applications. I enjoy constantly learning new technologies and right now I'm 
                    having a blast learning ReactJS. 
                </p>
                <p>
                    I'd love it if you connected with me on <a href="https://www.linkedin.com/in/tim-fierek/">LinkedIn</a> or 
                    if you send me an email with the form below. (Make sure to leave your email so I have a way to get back to you.)
                </p>
                <div className="contact-form">


                </div>
            </div>
        </div>
    )
}

export default AboutSection;