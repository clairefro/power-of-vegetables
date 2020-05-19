import React from "react"
import Fade from 'react-reveal/Fade'
import { graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"

import Divider from '../components/divider'
import BookPreview from '../components/bookPreview'
import ImageCarousel from '../components/imageCarousel'

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

const veggieRainbow = [
  imgBellpepper,
  imgCarrots,
  imgSquash,
  imgSpinach,
  imgEggplant,
  imgBeets,
]

export default ({ data }) => {
  const lazyBellpepper = data.file.childImageSharp.fluid
  return (
    <>
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
              <h1 className="title-main">The Power of Vegetables</h1>
              <p>by Claire Froelich</p>
              <p>Illustrated by Varvara Fomina</p>
              <a href="#" className="btn large">Read now</a>
            </div>
          </div>
        </Fade>
      </div>


      <Divider />

      <div className="container">
        <Fade>
          <div className="section-synopsis d-horizontal">
            <img src={imgBabydeer} alt="baby deer with open mouth" className="large-vegetable" id="title-image"/>
            <div className="textbox textbox-constrained">
              <h2>Synopsis</h2>
              <p>Baby deer prefers sweet pecan pie over dirty vegetables -  until Papa deer teaches the magical powers these veggies give us. But not all truths reveal themselves in the form of advice...</p>
              <h2 className="ta-center">~</h2>
              <p>On the surface this book is a piece of propaganda to get children to eat their vegetables. More subtly, it encourages questioning authority with our own observations. The story most importantly reminds us to laugh in life, and is best read aloud and not alone.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <Divider pattern={2}/>

      <div className="container">
        <Fade>
          <div className="section-look-inside">
            <h2 className="ta-center">Look Inside</h2>
            <BookPreview />
          </div>
        </Fade>
      </div>

      <Divider pattern={3}/>

      <div className="container">
        <div className="section-features">
          <Fade>
            <h3 className="ta-center">Learn colors with vegetables</h3>
            <ImageCarousel images={veggieRainbow}/>
          </Fade>

          <Fade>
            <div className="d-horizontal">
              <h3>Learn body parts</h3>
              <img src={imgBabydeerHead} className="large-vegetable" alt="Baby deer looking at a butterly, which is seen reflected in his eye"/>
            </div>
          </Fade>
          <Fade>
            <div className="d-horizontal">
              <img src={imgRabbitToot} className="large-vegetable" alt="Shocked rabbit tooting a rainbow while pausing eating a carrot"/>
              <h3>Laugh together</h3>
            </div>
          </Fade>
        </div>
      </div>


      <Divider />
      <div className="container">
        <Fade>
          <div className="section-reviews">
             <img src={imgPapadeer} alt="Papa deer admiring his vegetable garden"/>
            <h2>Reviews</h2>
            <div className="review">
              <span className="review-text">Lorem ipsum <strong>dolor sit amet</strong>, consectetur adipiscing elit </span>
              <p className="review-author">- Kendra Baker, mother of toddler</p>
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
