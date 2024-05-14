import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GlobalContext } from './../utils/Context';
import './contactus.css';
import HomestayManagerGuide from './H_M_G.pdf';

const ContactUs = () => {
    const { setPage } = useContext(GlobalContext);

        useEffect(() => {
            setPage("Contact us")
        }, [])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        priority: 'Medium', // Default priority level
        attachment: null
    });

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        const newValue = name === 'attachment' ? files[0] : value;
        setFormData({ ...formData, [name]: newValue });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Implement form submission logic here
        console.log(formData);
        // Reset form after submission
        setFormData({ name: '', email: '', subject: '', message: '', priority: 'Medium', attachment: null });
    };
    return (
        
        

        <div>
            
            <div className="contact-us-container">
                <div className="contact-info">
                    <h2>Contact Us</h2>
                    

                </div>
                <div className='qna'>
                    <div className="support-section">
                        <h2>Support for Users</h2>
                        <p>For general inquiries and support, please fill out the form below or use the contact information provided.</p>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                            
                                <input type="text" id="name" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                
                                <input type="email" id="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                
                                <input type="text" id="subject" placeholder="Subject" name="subject" value={formData.subject} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                
                                <textarea id="message" name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />
                            </div>
                            
                            <div className="form-group">
                                
                                <input type="file" id="attachment" placeholder="Attachment" name="attachment" onChange={handleChange} accept=".jpg, .jpeg, .png, .pdf" />
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>

                    <div className='q2n'>
                        <div className="manager-assistance">
                        <h2>Homestay Manager Assistance</h2>
                        <p>If you're a homestay manager looking to list your property, please refer to our <a href={HomestayManagerGuide} target='blank'>Homestay Manager Guide</a> for assistance.</p>
                        
                    </div>
                    <div className="social-media">
                            <h2>Connect with Us</h2>
                            <p>Follow us on social media for updates, promotions, and more:</p>
                            <ul>
                                <div className='scicon'>

                                    <li><a href="https://www.facebook.com/WanderStay"><i className="fab fa-facebook fa-2x" ></i></a></li>
                                    <li><a href="https://twitter.com/WanderStay"><i className="fab fa-twitter fa-2x"></i></a></li>
                                    <li><a href="https://www.instagram.com/WanderStay"><i className="fab fa-instagram fa-2x"></i></a></li>
                                </div>

                                <div className='emph'>

                                    <li><a href="mailto:contact@wanderstay.com"><i className="far fa-envelope fa-large"></i> contact@wanderstay.com</a></li>
                                    <li><a href="tel:123-456-7890"><i className="fas fa-phone-alt fa-large"></i> 123-456-7890</a></li>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="feedback">
                    <h2>Send Us Your Feedback</h2>
                    <p>We value your feedback! Please fill out our <a href="https://forms.gle/jodV2k3GmbR99zc59" target='blank'>Feedback Form</a> to share your thoughts, suggestions, or concerns with us.</p>
                </div>
            </div>

        </div>
    );
};

export default ContactUs;
