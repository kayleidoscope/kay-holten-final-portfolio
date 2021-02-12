import React from 'react';
import './Contact.css'

function Contact() {
  return (
    <section id='contact'>
      <h2>Contact Me</h2>
      <ul className="">
        <li>Email me: <address><a href="mailto:holtenkay@gmail.com">holtenkay@gmail.com</a></address></li>
        <li>Visit my <a href="https://github.com/kayleidoscope">GitHub</a></li>
        <li>Visit my <a href="https://www.linkedin.com/in/kay-holten/">LinkedIn</a></li>
      </ul>
    </section>
  );
}

export default Contact;
