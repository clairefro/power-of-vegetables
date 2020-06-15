import React from 'react'
import { Link } from '../components/link'
import Fade from 'react-reveal/Fade'
import SEO from '../components/seo'

export default () => (
  <div className="page-site">
    <SEO
      title="Acerca de este sitio"
      description="Información sobre los activos y servicios utilizados en este sitio web."
    />
    <Fade>
      <div className="container">
        <h2 className="ta-center">Acerca de este sitio</h2>
          <div className="text">
            <p>Desarrollado por <a href="https://www.linkedin.com/in/claire-froelich/" target="_blank" className="link" rel="noopener">Claire Froelich</a>.</p>
            <p>Generado por <a href="https://www.gatsbyjs.org/" target="_blank" className="link" rel="noopener"> Gatsby</a>.</p>
            <p>Hosting por <a href="https://www.netlify.com/" target="_blank" className="link" rel="noopener">Netlify</a>.</p>
            <p>Todas las ilustraciones por <a href="https://www.instagram.com/barbara.fomina/" target="_blank" className="link" rel="noopener">Varvara Fomina</a>. <br /> No copie las ilustraciones sin <Link to="/contact" className="link">el permiso de la autora</Link>.</p>
            <p>Icons por <a href="https://www.flaticon.com/" target="_blank" className="link" rel="noopener">Flaticon</a>.</p>
            <p>Formulario de contacto por <a href="https://getform.io/" target="_blank" className="link" rel="noopener">Getform</a>.</p>
            <p>Servicio de boletín de noticias por <a href="https://mailchimp.com/" target="_blank" className="link" rel="noopener">Mailchimp</a>.</p>
            <p>Sonido de pedo por <a href="https://www.zapsplat.com" target="_blank" className="link" rel="noopener">Zapsplat</a>.</p>
          </div>
      </div>
    </Fade>
  </div>
)
