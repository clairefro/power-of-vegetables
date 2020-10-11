import React from 'react'
import SVG from 'react-inlinesvg'
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'
import { Link } from '../components/link'

// images
import imgClaire from '../../static/images/creators/claire.jpg'
import imgVarvara from '../../static/images/creators/varvara.jpg'
import imgSuga from '../../static/images/creators/suga.jpg'
import imgFran from '../../public/images/creators/fran.jpg'
import imgDaphne from '../../static/images/creators/daphne.jpg'
import imgNatalia from '../../static/images/creators/natalia.jpg'

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
            <p>Inspirée par les pets de son frère, qui égayaient les soupers familiaux. Également développeuse web, elle a réalisé ce site.</p>
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
            <p>Illustratrice pigiste pleine d'enthousiasme, dont la passion est de plonger dans les histoires des autres, qu'il s'agisse de chevreuils qui pètent ou de science nucléaire.</p>
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
            <p>Interprète et traductrice. Si elle a l'air d'une travailleuse acharnée, elle ne manque cependant jamais une occasion de rire.</p>
          </div>
        </div>

        <div className="creator reverse">
          <div className="creator-section-img">
            <img src={imgDaphne} className="responsive" alt="Daphné B."/>
            <p className="ta-center">photo par JF Lemire, Shoot Studio</p>
          </div>
          <div className="creator-section-text">
            <h3><strong>Daphné B.</strong></h3>
            <p><strong>Traductrice (français)</strong></p>
            <p>Poète et traductrice littéraire, Daphné B. vit et travaille à Montréal.  Elle collabore régulièrement à l’émission de radio <a href="https://ici.radio-canada.ca/premiere/emissions/plus-on-est-de-fous-plus-on-lit" className="link" target="_blank" rel="noopener noreferrer"><em>Plus on est de fous, plus on lit.</em></a></p>
          </div>
        </div>

        <div className="creator">
          <div className="creator-section-img">
            <img src={imgFran} className="responsive" alt="Francili Luany"/>
          </div>
          <div className="creator-section-text">
            <h3><strong>Francili Luany</strong></h3>
            <p><strong>Traductrice (portugais)</strong></p>
            <p>Francili se décrit comme une femme noire à la recherche de sa place dans la société, se redécouvrant après la maternité et trouvant en la traduction un amour pour l'univers des lettres</p>
          </div>
        </div>

        <div className="creator reverse">
          <div className="creator-section-img">
            <img src={imgNatalia} className="responsive" alt="Natalia Sanín"/>
            <p className="ta-center">photo par Brent Mullins</p>
          </div>
          <div className="creator-section-text">
            <h3><strong>Natalia Sanín</strong></h3>
            <p><strong>Traductrice (espagnol)</strong></p>
            <p>Elle aime les animaux, y compris leurs pets. Elle passe une grande partie de son temps libre à lire et à écrire de la poésie et des nouvelles.</p>
          </div>
        </div>
      </Fade>
    </div>
  </div>
)
