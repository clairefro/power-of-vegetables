import React from 'react'
import { Link } from '../components/link'
import Fade from 'react-reveal/Fade'
import SEO from '../components/seo'

export default () => (
  <div className="page-site">
    <SEO
      title="Information du site"
      description="Informations sur les actifs et les outils utilisés dans ce site web."
    />
    <Fade>
      <div className="container">
        <h2 className="ta-center">Information du site</h2>
          <div className="text">
            <p>Développé par <a href="https://www.linkedin.com/in/claire-froelich/" target="_blank" className="link" rel="noopener">Claire Froelich</a>.</p>
            <p>Généré par <a href="https://www.gatsbyjs.org/" target="_blank" className="link" rel="noopener"> Gatsby</a>.</p>
            <p>Hosting par <a href="https://www.netlify.com/" target="_blank" className="link" rel="noopener">Netlify</a>.</p>
            <p>Toutes les illustrations par <a href="https://www.instagram.com/barbara.fomina/" target="_blank" className="link" rel="noopener">Varvara Fomina</a>. <br /> Ne pas copier les illustrations sans <Link to="/contact" className="link">l'autorisation de l'auteur</Link>.</p>
            <p>Icons par <a href="https://www.flaticon.com/" target="_blank" className="link" rel="noopener">Flaticon</a>.</p>
            <p>Formulaire de contact par <a href="https://getform.io/" target="_blank" className="link" rel="noopener">Getform</a>.</p>
            <p>Service de newsletter par <a href="https://mailchimp.com/" target="_blank" className="link" rel="noopener">Mailchimp</a>.</p>
            <p>Son de pet par <a href="https://www.zapsplat.com" target="_blank" className="link" rel="noopener">Zapsplat</a>.</p>
          </div>
      </div>
    </Fade>
  </div>
)
