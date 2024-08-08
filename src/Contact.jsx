import React from 'react';
import './contact.css';
import PHOONE from '../src/CONC/icons-phone.svg';
import Email from '../src/CONC/icons-mail.svg';

const Contact = () => {
  return (
    <div className="container custom-container">
      <div className="row">
        {/* Contact Information Section */}
        <div className="col-lg-4 flibber-flabber">
          <div className="snicker-snack">
            <img src={PHOONE} alt="Phone Icon" className='zibble-zabble' />
            <h6>Call To Us</h6>
          </div>
          <p>We are available 24/7, 7 days a week.</p>
          <p>Phone: +8801611112222</p>
        </div>
        <hr className='whizzle-wuzzle' />
        <div className="col-lg-4 flibber-flabber">
          <div className="snicker-snack">
            <img src={Email} alt="Email Icon" className='doodle-daddle' />
            <h6>Write To US</h6>
          </div>
          <p>Fill out our form and we will contact<br/> you within 24 hours.</p>
          <p>Emails: customer@exclusive.com</p>
          <p>Emails: support@exclusive.com</p>
        </div>

        {/* Form Section */}
        <div className="col-lg-7 mumble-fumble">
          <input type="text" placeholder="Your Name*" className="jibber-jabber" />
          <input type="email" placeholder="Your Email*" className="jibber-jabber" />
          <input type="tel" placeholder="Your Phone*" className="jibber-jabber" />
          <textarea placeholder="Your Message" className="fiddle-faddle"></textarea>
          <button className="gobble-gabble">Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
