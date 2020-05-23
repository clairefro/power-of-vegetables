import React from 'react'
import SEO from '../components/seo'
import Fade from 'react-reveal/Fade'

import ContactForm from '../components/contactForm'

export default () => (
  <div className="page-contact">
    <SEO
      title="Contact"
      description="Got a question or a review? Contact the author of 'The Power of Vegetables'."
    />
    <Fade>
      <div className="container">
        <div className="title-box">
          <h2 className="ta-center">Contact</h2>
          <p>Have a question or a book review? </p>
          <p>Contact the author from the form below.</p>
        </div>
        <ContactForm />
      </div>
    </Fade>
  </div>
)
