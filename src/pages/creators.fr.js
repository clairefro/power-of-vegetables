import React from 'react'
import SVG from 'react-inlinesvg'
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'
import { Link } from '../components/link'

// images
import imgClaire from '../../static/images/creators/claire.jpg'
import imgVarvara from '../../static/images/creators/varvara.jpg'
import imgSuga from '../../static/images/creators/suga.jpg'

// icons
import iconInstagram from '../../static/icons/instagram.svg'

export default () => (
  <div className="page-creators">
    <SEO
      title="Créateurs"
      description="'The Power of Vegetables', written by Claire Froelich and illustrated by Varvara Fomina."
    />
    <div className="container">
      <Fade>
        <h2 className="ta-center">Les Créateurs</h2>

        <div className="creator">
          <div className="creator-section-img">
            <img src={imgClaire} className="responsive" alt="Claire Froelich"/>
            <p className="ta-center">photo par Anastasia Mayamsina</p>
          </div>
          <div className="creator-section-text">
            <h3><strong>Claire Froelich</strong></h3>
            <p><strong>Auteure</strong></p>
            <p>Inspirée par les pets comiques de son frère à la table du dîner. Également développeur web, elle a réalisé ce site.</p>
            <p><Link to="contact" className="link">Contact</Link></p>
          </div>
        </div>


        <div className="creator reverse">
          <div className="creator-section-img">
            <img src={imgVarvara} className="responsive" alt="Varvara Fomina"/>
          </div>
          <div className="creator-section-text">
            <h3><strong>Varvara Fomina</strong></h3>
            <p><strong>Illustratrice</strong></p>
            <p>Illustratrice freelance enthousiaste dont la passion est de se plonger dans les histoires des autres, qu'il s'agisse de chevreuils qui pètent ou de science nucléaire.</p>
            <a href="https://www.instagram.com/barbara.fomina/" target="_blank" rel="noopener" className="link d-flex" style={{ alignItems: 'center'}}>
              <SVG src={iconInstagram}/>
              <span style={{marginLeft: '0.5rem'}}>barbara.fomina</span>
            </a>
          </div>
        </div>

        <div className="creator">
          <div className="creator-section-img">
            <img src={imgSuga} className="responsive" alt="Miki Sugawara"/>
          </div>
          <div className="creator-section-text">
            <h3><strong>Miki Sugawara</strong></h3>
            <p><strong>Traductrice (japonais)</strong></p>
            <p>Interprète et traductrice. Bien qu'elle puisse sembler diligente, elle ne manque jamais une occasion de rire.</p>
          </div>
        </div>
      </Fade>
    </div>
  </div>
)
