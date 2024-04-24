import React from 'react'
import './ContactUs.css'

import { Link } from 'react-router-dom';

import WatchLaterIcon from '@mui/icons-material/WatchLater';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

function ContactUs() {
    return (
        <div className="contactUs-Page">

            <div className="sub-contactUs-Page">

                <div className="contact-form">

                    <div className="contact-form-left">

                        <div className="contact-form-left-contant">
                            <h1>Keep in touch With Us</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>

                        <div>
                            <form action="" className="contact-form-left-form">

                                <div className="contact-form-left-form-input-fields">

                                    <div className="contact-form-left-form-input-label">
                                        <label htmlFor="">Full Name :</label>
                                        <input type="text" placeholder='Enter Your Full Name' />
                                    </div>

                                    <div className="contact-form-left-form-input-label">
                                        <label htmlFor="">Email :</label>
                                        <input type="text" placeholder='Enter Your mail' />
                                    </div>

                                </div>

                                <div className="contact-form-left-form-input-fields">

                                    <div className="contact-form-left-form-input-label">
                                        <label htmlFor="">Contact Number :</label>
                                        <input type="text" placeholder='Enter  Number ' />
                                    </div>

                                    <div className="contact-form-left-form-input-label">
                                        <label htmlFor="">Subject :</label>
                                        <input type="text" placeholder='Enter Subject' />
                                    </div>

                                </div>

                                <div className="contact-form-left-form-input-fields">

                                    <div className="contact-form-left-form-input-label textarea">
                                        <label htmlFor="">Message :</label>
                                        <textarea name="" placeholder="Drop Your Message" id="" cols="30" rows="10"></textarea>
                                    </div>

                                </div>
                                <button className='form-button'><Link to="/">Send Message</Link></button>
                            </form>
                        </div>

                    </div>

                    <div className="contact-form-right">

                        <div className="contact-form-right-open-hour">
                            <div className="contact-form-right-open-hour-img">
                                <WatchLaterIcon />
                                <h3>Open Hours</h3>
                            </div>
                            <p>Mon - Friday : 9 AM - 5 PM</p>
                        </div>

                        <div className="contact-form-right-open-hour">
                            <div className="contact-form-right-open-hour-img">
                                <MailIcon />
                                <h3>Email</h3>
                            </div>
                            <a href="mailto:kabirusman@gmail.com">kabirusman@gmail.com</a>
                        </div>

                        <div className="contact-form-right-open-hour">
                            <div className="contact-form-right-open-hour-img">
                                <PhoneIcon />
                                <h3>Phone</h3>
                            </div>
                            <a href="tel:+971 987654321">+971 987654321</a>
                        </div>

                    </div>

                </div>

            </div>

        </div >
    )
}

export default ContactUs