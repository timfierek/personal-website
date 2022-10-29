import React from "react";

function ContactForm() {
    const [formData, setFormData] = React.useState({ name: "", email: "", message: "" })

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

    return(
        <div className="contact-form">
            <form action="" className="about--form">
                <h1>Connect with me!</h1>
                <div className="name-and-email-inputs">
                    <input
                        onChange={updateForm}
                        value={formData.name}
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                    />
                    <input
                        onChange={updateForm}
                        value={formData.email}
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        required
                    />
                </div>

                <textarea
                    onChange={updateForm}
                    value={formData.message}
                    placeholder="Write your message here..."
                    name="message"
                    id="message"
                    required
                />
                <input className="submit" type="submit" onClick={sendForm} />
            </form>
        </div>
    )
}

export default ContactForm;