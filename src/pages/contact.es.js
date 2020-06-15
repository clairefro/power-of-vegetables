import React from 'react'
import SEO from '../components/seo'
import Fade from 'react-reveal/Fade'

import ContactForm from '../components/contactForm'

export default () => (
  <div className="page-contact">
    <SEO
      title="Contacta a la autora"
      description="¿Tienes preguntas o comentarios? Contacta a la autora de 'El poder de las verduras'."
    />
    <Fade>
      <div className="container">
        <div className="title-box">
          <h2 className="ta-center">Contacto</h2>
          <p>¿Tienes preguntas o comentarios?</p>
          <p>Contacta a la autora con el siguiente formulario:</p>
        </div>
        <ContactForm />
      </div>
    </Fade>
  </div>
)
