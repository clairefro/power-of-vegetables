import React from 'react'
import SVG from 'react-inlinesvg'
import Fade from 'react-reveal/Fade'
import SEO from '../components/seo'

// images
import imgClaire from '../../static/images/creators/claire.jpg'
import imgVarvara from '../../static/images/creators/varvara.jpg'
import imgSuga from '../../static/images/creators/suga.jpg'

// icons
import iconInstagram from '../../static/icons/instagram.svg'

export default () => (
  <div className="page-books">
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
            <p>Moved by the funny things in life, inspired by her brother's comedic tooting at the dinner table. Also a web developer, she made this website.</p>
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
            <a href="https://www.instagram.com/barbara.fomina/" target="_blank" className="link d-flex" style={{ alignItems: 'center'}}>
              <SVG src={iconInstagram}/>
              <span style={{marginLeft: '0.5rem'}}>@barbara.fomina</span>
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
            <p>In-house interpretor and translator. While she may seem diligent she never misses a laugh.</p>
          </div>
        </div>
        
      </Fade>
    </div>
  </div>
)
