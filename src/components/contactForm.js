// powered by getform.io
import React from 'react'

// context
import { usePageContext } from '../context/pageContext'

const ContactForm = () => (
  <div className="contact-form">
    <form action="https://getform.io/f/50e76ce9-abaf-4dbf-96cf-8097111def24" className="contact" method="POST">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" />
      <label htmlFor="email">Email</label>
      <input type="email" name="email" required/>
      <label htmlFor="message">Message</label>
      <textarea rows="6" name="message" required />
      <button type="submit">Send</button>
    </form>
  </div>
)

export default ContactForm
