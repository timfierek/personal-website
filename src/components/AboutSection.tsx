import React from "react";
import headshot1 from '../images/pfp1.jpg';
import headshot2 from '../images/pfp2.jpg';

function AboutSection() {
    const [pfp, setPfp] = React.useState(headshot1);
    const [formData, setFormData] = React.useState({ name: "", email: "", message: "" })

    function flipPfp() {
        if (pfp === headshot1) setPfp(headshot2);
        else setPfp(headshot1)
    }

    function updateForm(event: any) {
        const { name, value } = event.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    function sendForm() {
        "EmailJS maybe?"
    }

    return (
        <div className="about">
            <div className="about--headshot">
                <img src={pfp} alt="" className="headshot--image" onClick={flipPfp} />
            </div>
            <div className="about--text">
                <p>Welcome to my site, <br /><br />I'm Tim Fierek, a Software Engineer based in Michigan, USA.
                    My favorite place to work is on the backend; I have multiple years of experience with Java,
                    and am well versed in Spring, MongoDB, SQL, and AWS. I'm extremely interested in fintech and
                    decentralized applications. I enjoy constantly learning new technologies and right now I'm
                    having a blast learning ReactJS.
                </p>
                <br />
                <p>
                    I'd love it if you connected with me on <a href="https://www.linkedin.com/in/tim-fierek/">LinkedIn</a> or
                    if you sent me an email using the form below.
                </p>
            </div>
            <form action="" className="about--form">
                <div className="name-and-email-inputs">
                    <label htmlFor="name">Name</label>
                    <input
                        onChange={updateForm}
                        value={formData.name}
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                    />

                    <label htmlFor="email">Email</label><br />
                    <input
                        onChange={updateForm}
                        value={formData.email}
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                    />
                </div>

                <label htmlFor="message">Message</label>
                <textarea
                    onChange={updateForm}
                    value={formData.message}
                    placeholder="Write your message here..."
                    name="message"
                    id="message"
                />

                <input type="submit" value="Send" onClick={sendForm} />
            </form>
        </div>
    )
}

export default AboutSection;