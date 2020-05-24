import React from 'react'
import SEO from '../components/seo'
import Fade from 'react-reveal/Fade'

import ContactForm from '../components/contactForm'

export default () => (
  <div className="page-contact">
    <SEO
      title="Contact"
      description="Vous avez une question ou une critique de livre ? Contactez l'auteur de « The Power of Vegetables »."
    />
    <Fade>
      <div className="container">
        <div className="title-box">
          <h2 className="ta-center">Contact</h2>
          <p>Vous avez une question ou une critique de livre ?</p>
          <p>Contactez l'auteure à partir du formulaire ci-dessous.</p>
        </div>
        <ContactForm />
      </div>
    </Fade>
  </div>
)
