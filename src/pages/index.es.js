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
import page1 from '../../static/images/book-pages/es/page-1.jpg'
import page2 from '../../static/images/book-pages/es/page-2.jpg'
import page3 from '../../static/images/book-pages/es/page-3.jpg'
import page4 from '../../static/images/book-pages/es/page-4.jpg'
import page5 from '../../static/images/book-pages/es/page-5.jpg'
import page6 from '../../static/images/book-pages/es/page-6.jpg'

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
        title="Home"
        description="Bebé ciervo prefiere la tarta dulce de nueces a las verduras cubiertas de tierra, hasta que papá ciervo le enseña los poderes mágicos que nos dan estos alimentos. Pero no todas las verdades se revelan con la forma de los consejos..."
      />
      <div className="container">
        <Fade>
          <div className="section-title">
            <Img
              fluid={lazyBellpepper}
              alt="bell pepper"
              objectFit="contain"
              className="large-vegetable"
              id="title-image"
            />
            <div className="textbox">
              <h1 className="title-main">El poder de las verduras</h1>
              <p>por Claire Froelich</p>
              <p>Ilustraciones por Varvara Fomina</p>
              <Link to="/books"
                className="btn large"
                onClick={() => fart.play()}
              >
                Léelo ahora
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
                <img src={imgBabydeer} alt="ciervo bebé con la boca abierta" className="responsive mw-600" id="title-image"/>
              </div>
              <div className="textbox textbox-constrained">
                <h2>Sinopsis</h2>
                <p>Bebé ciervo prefiere la tarta dulce de nueces a las verduras cubiertas de tierra, hasta que papá ciervo le enseña los poderes mágicos que nos dan estos alimentos. Pero no todas las verdades se revelan con la forma de los consejos...</p>
                <h2 className="ta-center tilde">~</h2>
                <p>A simple vista, este libro tiene el propósito de hacer que los niños coman sus verduras. Más sutilmente, alienta a los lectores a cuestionar la autoridad con sus propias observaciones. Y, lo que es aun más importante, esta historia nos recuerda que debemos reírnos en la vida, por lo que es mejor leerla en voz alta, acompañados.
                </p>
              </div>


          </div>
        </Fade>
      </div>

      <Divider pattern={2}/>

      <div className="container">
        <Fade>
          <div className="section-look-inside">
            <h2 className="ta-center">Hojea el libro</h2>
            <BookPreview pages={pages}/>
          </div>
        </Fade>
      </div>

      <Divider pattern={3}/>

      <div className="container">
        <div className="section-features">
          <Fade>
            <h3 className="ta-center">Aprende los colores con las verduras</h3>
            <ImageCarousel images={veggieRainbow}/>
          </Fade>

          <Fade>
            <div className="d-horizontal">
              <h3>Aprende las partes del cuerpo</h3>
              <img src={imgBabydeerHead} className="responsive mw-600" alt="Un ciervo bebé mirando una mariposa, que se ve reflejada en su ojo"/>
            </div>
          </Fade>
          <Fade>
            <div className="d-horizontal reverse">
              <img src={imgRabbitToot} className="responsive mw-600" alt="Un conejo sorprendido tirándose un pedo de arco iris mientras hacía una pausa para comer una zanahoria."/>
              <h3>Riámonos juntos</h3>
            </div>
          </Fade>
        </div>
      </div>


      <Divider />
      <div className="container">
        <Fade>
          <div className="section-reviews">
            <img src={imgPapadeer} alt="Papá ciervo admirando su huerto" className="responsive mw-600"/>
            <h2 className="fr">Commentarios</h2>
            <div className="review">
              <span className="review-text">Mi hijo <strong>disfrutó el final casi demasiado...</strong></span>
              <p className="review-author">- Kendra B., madre de niño pequeño</p>
            </div>
            <div className="review">
              <span className="review-text">Finalmente, un libro para niños en el que <strong>me reía tan fuerte como mis hijos</strong>.</span>
              <p className="review-author">- Farhan D., padre de gemelos</p>
            </div>
          </div>

          <div className="d-flex jc-center">
            <Link to="/books"
              className="btn large"
            >
              Léelo ahora
            </Link>
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
