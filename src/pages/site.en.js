import React from 'react'
import { Link } from '../components/link'
import Fade from 'react-reveal/Fade'
import SEO from '../components/seo'

export default () => (
  <div className="page-site">
    <SEO
      title="About this site"
      description="Information on assets and tools used in this website."
    />
    <Fade>
      <div className="container">
        <h2 className="ta-center">About this site</h2>
          <div className="text">
            <p>Created by <a href="https://www.linkedin.com/in/claire-froelich/" target="_blank" className="link" rel="noopener">Claire Froelich</a>. Powered by <a href="https://www.gatsbyjs.org/" target="_blank" className="link" rel="noopener"> Gatsby</a> and React, hosted on <a href="https://www.netlify.com/" target="_blank" className="link" rel="noopener">Netlify</a>.</p>
            <p>All illustrations by <a href="https://www.instagram.com/barbara.fomina/" target="_blank" className="link" rel="noopener">Varvara Fomina</a>. Do not copy illustrations without <Link to="/contact" className="link">permission from the author</Link>.</p>
            <p>Icons by <a href="https://www.flaticon.com/" target="_blank" className="link" rel="noopener">Flaticon</a>.</p>
            <p>Contact form backend by <a href="https://getform.io/" target="_blank" className="link" rel="noopener">Getform</a>.</p>
            <p>Mailist services by <a href="https://mailchimp.com/" target="_blank" className="link" rel="noopener">Mailchimp</a>.</p>
            <p>Fart sound by <a href="https://www.zapsplat.com" target="_blank" className="link" rel="noopener">Zapsplat</a>.</p>
          </div>
      </div>
    </Fade>
  </div>
)
