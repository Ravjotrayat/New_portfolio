import React from "react";
import '../Contact.css'; // Assuming you save the CSS in this file

export default function Contact(props) {
  return (

    <div className="back">
    <div className="contact-container">
      <h2>Get In Touch</h2>
      <p>Join the Journey. Questions and Suggestions are truly welcomed here.</p>
      <form
        action="https://formspree.io/f/xanwbnjb"
        method="POST"
        className="contact-form"
      >
        <textarea
          name="message"
          rows="5"
          placeholder="Your message here..."
          required
        ></textarea>
        <button type="submit" className="contact-button">
          Contact Me
        </button>
      </form>
    </div>

    </div>
  );
}
