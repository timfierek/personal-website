import React from "react";

function AboutSection() {
    const headshot1 = '/images/pfp1.jpg';
    const headshot2 = '/images/pfp2.jpg';
    const [pfp, setPfp] = React.useState(headshot1);

    function flipPfp() {
        if (pfp === headshot1) setPfp(headshot2);
        else setPfp(headshot1)
    }

    return (
        <div className="about">
            <div className="about--headshot">
                <img src={pfp} alt="" className="headshot--image" onClick={flipPfp} />
            </div>
            <div className="about--text">
                <p>Welcome to my site, <br /><br />I'm Tim Fierek, a Software Engineer based in Michigan, USA.
                    My favorite place to work on the stack is the backend; I have multiple years of experience with Java,
                    and am well versed in Spring, MongoDB, SQL, and AWS. I'm extremely interested in fintech and
                    decentralized applications. I enjoy constantly learning new technologies and right now I'm
                    having a blast learning ReactJS.
                </p>
                <br />
                <p>
                    I'd love it if you'd connect with me on <a href="https://www.linkedin.com/in/tim-fierek/">LinkedIn</a> or
                    if you'd send me an email using the form below.
                </p>
            </div>
        </div>
    )
}

export default AboutSection;