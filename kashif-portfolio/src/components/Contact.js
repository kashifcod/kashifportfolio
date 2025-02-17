import React, { useState } from 'react';
import PopupMessage from './PopupMessage';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Clear form fields
        setName('');
        setEmail('');
        setMessage('');

        // Show popup message
        setShowPopup(true);

        // Hide popup after 3 seconds
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    };

    return (
        <section id="contact">
            <div className="container">
                <h2 className="text-center mb-5">Get in Touch</h2>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="5"
                                    placeholder="Your Message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 py-2">
                                Send Message <i className="fas fa-paper-plane ms-2"></i>
                            </button>
                        </form>
                    </div>
                </div>
                {showPopup && (
                    <div className="popup" id="popupMessage" style={{ display: showPopup ? 'block' : 'none' }}>
                        Thanks for your kind response!
                    </div>
                )}            </div>
        </section>
    );
}

export default Contact;