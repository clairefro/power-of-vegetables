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
      title="Creators"
      description="'The Power of Vegetables', written by Claire Froelich and illustrated by Varvara Fomina."
    />
    <div className="container">
      <Fade>
        <h2 className="ta-center">About the Creators</h2>

        <div className="creator">
          <div className="creator-section-img">
            <img src={imgClaire} className="responsive" alt="Claire Froelich"/>
            <p className="ta-center">photo by Anastasia Mayamsina</p>
          </div>
          <div className="creator-section-text">
            <h3><strong>Claire Froelich</strong></h3>
            <p><strong>Author</strong></p>
            <p>Inspired by her brother's comedically timed toots at the dinner table. Also a web developer, she made this website.</p>
            <p><Link to="contact" className="link">Contact</Link></p>
          </div>
        </div>


        <div className="creator reverse">
          <div className="creator-section-img">
            <img src={imgVarvara} className="responsive" alt="Varvara Fomina"/>
          </div>
          <div className="creator-section-text">
            <h3><strong>Varvara Fomina</strong></h3>
            <p><strong>Illustrator</strong></p>
            <p>Enthusiastic freelance illustrator whose passion is to dive into others' storytelling, whether it be tooting deer or nuclear science.</p>
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
            <p><strong>Japanese Translator</strong></p>
            <p>Interpreter and translator. While she may seem serious she never misses a chance for a laugh.</p>
          </div>
        </div>

        <div className="creator reverse">
          <div className="creator-section-img">
            <img src={imgDaphne} className="responsive" alt="Daphné B."/>
            <p className="ta-center">photo by JF Lemire, Shoot Studio</p>
          </div>
          <div className="creator-section-text">
            <h3><strong>Daphné B.</strong></h3>
            <p><strong>French Translator</strong></p>
            <p>Daphne B. is a poet and literary translator based in Montreal. You can hear her talk about books on the radio show <a href="https://ici.radio-canada.ca/premiere/emissions/plus-on-est-de-fous-plus-on-lit" className="link" target="_blank" rel="noopener noreferrer"><em>Plus on est de fous, plus on lit.</em></a></p>
          </div>
        </div>

        <div className="creator">
          <div className="creator-section-img">
            <img src={imgFran} className="responsive" alt="Francili Luany"/>
          </div>
          <div className="creator-section-text">
            <h3><strong>Francili Luany</strong></h3>
            <p><strong>Portuguese Translator</strong></p>
            <p>Francili describes herself as a Black woman seeking her space in society, rediscovering herself after motherhood and finding in translation a love for the universe of letters.</p>
          </div>
        </div>

        <div className="creator reverse">
          <div className="creator-section-img">
            <img src={imgNatalia} className="responsive" alt="Natalia Sanín"/>
            <p className="ta-center">photo by Brent Mullins</p> 
          </div>
          <div className="creator-section-text">
            <h3><strong>Natalia Sanín</strong></h3>
            <p><strong>Spanish Translator</strong></p>
            <p>She loves animals, including their toots. Spends a lot of her free time reading and writing poetry and short stories.</p>
          </div>
        </div>

      </Fade>
    </div>
  </div>
)
