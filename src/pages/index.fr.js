import React, { useState, useEffect} from "react"
import Fade from 'react-reveal/Fade'
import { graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
import UIfx from 'uifx'

import SEO from '../components/seo'
import { Link } from '../components/link'
import Divider from '../components/divider'
import BookPreview from '../components/bookPreview'
import ImageCarousel from '../components/imageCarousel'

// sound
import sound from '../../static/sounds/fart.mp3'

// vegetables
import imgBellpepper from '../../static/images/vegetables/bellpepper.png'
import imgCarrots from '../../static/images/vegetables/carrots.png'
import imgSquash from '../../static/images/vegetables/squash.png'
import imgSpinach from '../../static/images/vegetables/spinach.png'
import imgEggplant from '../../static/images/vegetables/eggplant.png'
import imgBeets from '../../static/images/vegetables/beets.png'

// animals
import imgBabydeer from '../../static/images/animals/babydeer.png'
import imgBabydeerHead from '../../static/images/animals/babydeerhead.png'
import imgRabbitToot from '../../static/images/animals/toot.png'
import imgPapadeer from '../../static/images/animals/papa.png'

// preview pages
import page1 from '../../static/images/book-pages/en/page-1.jpg'
import page2 from '../../static/images/book-pages/en/page-2.jpg'
import page3 from '../../static/images/book-pages/en/page-3.jpg'
import page4 from '../../static/images/book-pages/en/page-4.jpg'
import page5 from '../../static/images/book-pages/en/page-5.jpg'
import page6 from '../../static/images/book-pages/en/page-6.jpg'

// Array-ify
const veggieRainbow = [
  imgBellpepper,
  imgCarrots,
  imgSquash,
  imgSpinach,
  imgEggplant,
  imgBeets,
]
const pages = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
]

export default ({ data }) => {
  const [fart, setFart]= useState({play: ()=>console.log("can't play yet")})
  const lazyBellpepper = data.file.childImageSharp.fluid

  useEffect(()=> {
    setFart(new UIfx(sound))
  },[])

  return (
    <>
      <SEO
        title="Accueil "
        description="Baby deer prefers sweet pecan pie over dirty vegetables -  until Papa deer teaches the magical powers these veggies give us. But not all truths reveal themselves in the form of advice..."
      />
      <div className="container">
        <Fade>
          <div className="section-title">
            <Img
              fluid={lazyBellpepper}
              alt="un poivron"
              objectFit="contain"
              className="large-vegetable"
              id="title-image"
            />
            <div className="textbox">
              <h1 className="title-main">Le pouvoir des légumes</h1>
              <p>Texte de Claire Froelich</p>
              <p>Illustré par Varvara Fomina</p>
              <Link to="/books"
                className="btn large fr"
                onClick={() => fart.play()}
              >
                Lire
              </Link>
            </div>
          </div>
        </Fade>
      </div>

      <Divider />

      <a id="synopsis"></a>
      <div className="container">
        <Fade>
          <div className="section-synopsis d-horizontal">
              <div className="deer-wrapper">
                <img src={imgBabydeer} alt="bébé chevreuil avec la bouche ouverte" className="responsive mw-600" id="title-image"/>
              </div>
              <div className="textbox textbox-constrained">
                <h2>Synopsis</h2>
                <p>Bébé chevreuil préfère les tartes aux pacanes sucrées aux légumes encrassés de terre — jusqu’à ce que papa chevreuil lui enseigne les pouvoirs magiques que ces légumes confèrent. La vérité éclate enfin, et pas juste de la bouche de papa chevreuil.</p>
                <h2 className="ta-center tilde">~</h2>
                <p>À première vue, ce livre se présente comme un outil de propagande pour amener les enfants à manger leurs légumes. De manière plus subtile, il encourage les lecteurs à remettre en question l’autorité et à émettre leurs propres observations. Plus important encore, cette histoire nous rappelle qu’il est essentiel de rire dans la vie — c’est pourquoi il vaut mieux la lire à voix haute, avec quelqu’un d’autre.
                </p>
              </div>
          </div>
        </Fade>
      </div>

      <Divider pattern={2}/>

      <div className="container">
        <Fade>
          <div className="section-look-inside">
            <h2 className="ta-center">Feuilleter ce livre</h2>
            <BookPreview pages={pages}/>
          </div>
        </Fade>
      </div>

      <Divider pattern={3}/>

      <div className="container">
        <div className="section-features">
          <Fade>
            <h3 className="ta-center">Apprendre les couleurs avec les légumes</h3>
            <ImageCarousel images={veggieRainbow}/>
          </Fade>

          <Fade>
            <div className="d-horizontal">
              <h3>Apprendre les parties du corps</h3>
              <img src={imgBabydeerHead} className="responsive mw-600" alt="Baby deer looking at a butterly, which is seen reflected in his eye"/>
            </div>
          </Fade>
          <Fade>
            <div className="d-horizontal reverse">
              <img src={imgRabbitToot} className="responsive mw-600" alt="Shocked rabbit tooting a rainbow while pausing eating a carrot"/>
              <h3>Rire ensemble</h3>
            </div>
          </Fade>
        </div>
      </div>

      <Divider />
      <div className="container">
        <Fade>
          <div className="section-reviews">
            <img src={imgPapadeer} alt="Papa deer admiring his vegetable garden" className="responsive mw-600"/>
            <h2 className="fr">Commentaires</h2>
            <div className="review">
              <span className="review-text">Mon fils <strong>a trop aimé</strong> la fin...</span>
              <p className="review-author">- Kendra B., mère</p>
            </div>
            <div className="review">
              <span className="review-text">Finally, a children's book where <strong>I laughed as loud as my kids did</strong>.</span>
              <p className="review-author">- Farhan D.,  père de jumeaux</p>
            </div>
          </div>
        </Fade>
      </div>
    </>
  )
}

// get bellpepper for lazy load
export const query = graphql`
  query {
    file(relativePath: { eq: "vegetables/bellpepper.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1579) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
