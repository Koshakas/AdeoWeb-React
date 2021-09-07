import React from "react";
import "../css/contact.scss";

function Contact() {
  return (
    <div className="container contact">
      <h1>Contact</h1>
      <div className="contact-content">
        <div className="contact-text">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae voluptas debitis iste cumque animi explicabo impedit. Aperiam est modi cum
            hic odio. Fugiat distinctio itaque odio blanditiis velit. Unde, fuga.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eos doloremque odit aliquam aperiam cumque provident numquam alias
            reiciendis eligendi distinctio, autem nam eveniet quisquam doloribus aliquid consectetur dolore beatae?
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem saepe totam, modi non voluptate iste atque doloremque aliquam? Pariatur
            culpa quae exercitationem optio quo adipisci explicabo saepe accusamus magni amet!
          </p>
        </div>
        <div className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
          <label htmlFor="email">Email</label>
          <input type="email" name="" placeholder="test@test.com" id="email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" name="contact-textarea"></textarea>
          <button>Learn More</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
