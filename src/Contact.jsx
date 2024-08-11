import React from 'react';
import './contact.css';
import PHOONE from '../src/CONC/icons-phone.svg';
import Email from '../src/CONC/icons-mail.svg';

const Contact = () => {
  return (
    <div className="container">
      <div id="custom-container">
        <div id="custom-row">
          {/* Contact Information Section */}
          <div className="col-lg-4" id="contact-info-section">
            <div id="contact-phone">
              <div id="phone-icon-text">
                <img src={PHOONE} alt="Phone Icon" id='phone-icon' />
                <h6>Call To Us</h6>
              </div>
              <p>We are available 24/7, 7 days a week.</p>
              <p>Phone: +8801611112222</p>
            </div>
            <hr id='custom-divider' />
            <div id="contact-email">
              <div id="email-icon-text">
                <img src={Email} alt="Email Icon" id='email-icon' />
                <h6>Write To Us</h6>
              </div>
              <p>Fill out our form and we will contact<br/> you within 24 hours.</p>
              <p>Emails: customer@exclusive.com</p>
              <p>Emails: support@exclusive.com</p>
            </div>
          </div>

          {/* Form Section */}
          <div className="col-lg-7 " id="contact-form">
            <div className="d-flex" id='input-group'>
              <input type="text" placeholder="Your Name*" id="name-input" />
              <input type="email" placeholder="Your Email*" id="email-input" />
              <input type="tel" placeholder="Your Phone*" id="phone-input" />
            </div>
            <textarea placeholder="Your Message" id="message-textarea"></textarea>
            <button id="send-button" className='mt-2'>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
