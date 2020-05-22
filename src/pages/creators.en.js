import React from 'react'
import SVG from 'react-inlinesvg'

import SEO from '../components/seo'

// images
import imgClaire from '../../static/images/creators/claire.jpg'
import imgVarvara from '../../static/images/creators/varvara.jpg'

// icons
import iconInstagram from '../../static/icons/instagram.svg'

export default () => (
  <div className="page-books">
    <SEO
      title="Creators"
      description="'The Power of Vegetables', written by Claire Froelich and illustrated by Varvara Fomina."
    />
    <div className="container">
      <h2 className="ta-center">About the Creators</h2>

      <div className="creator">
        <div className="creator-section-img">
          <img src={imgClaire} className="responsive" alt="Claire Froelich"/>
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

    </div>
  </div>
)
