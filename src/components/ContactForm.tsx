import React from "react";
import { send } from '@emailjs/browser';
import { useState } from 'react';

function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" })

    function handleChange(event: any) {
        const { name, value } = event.target;

        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }

    const submitForm = (event: any) => {
        event.preventDefault();
        send(
            'service_nw1uu8r',
            'template_6e9kg9a',
            {
                from_name: formData.name,
                reply_to: formData.email,
                message: formData.message
            },
            'Y84SH955KJf5FOUPO'
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    }

    return(
        <div className="contact-form">
            <form action="" className="about--form">
                <h1>Connect with me!</h1>
                <div className="name-and-email-inputs">
                    <input
                        onChange={handleChange}
                        value={formData.name}
                        type="text"
                        placeholder="Name"
                        name="name"
                        id="name"
                    />
                    <input
                        onChange={handleChange}
                        value={formData.email}
                        type="email"
                        placeholder="Email"
                        name="email"
                        id="email"
                        required
                    />
                </div>

                <textarea
                    onChange={handleChange}
                    value={formData.message}
                    placeholder="Write your message here..."
                    name="message"
                    id="message"
                    required
                />
                <input className="submit" type="submit" onClick={submitForm}/>
            </form>
        </div>
    )
}

export default ContactForm;