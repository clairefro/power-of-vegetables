import React from "react"

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

const veggieRainbow = [
  imgBellpepper,
  imgCarrots,
  imgSquash,
  imgSpinach,
  imgEggplant,
  imgBeets,
]

export default () => {
  return (
    <>
      <div className="container">
      <div className="section-title section-left-right">
        <img src={imgBellpepper} alt="bell pepper" className="large-vegetable" id="title-image"/>
        <div className="textbox">
          <h1 className="title-main">The Power of Vegetables</h1>
          <p>by Claire Froelich</p>
          <p>Illustrated by Varvara Fomina</p>
          <a href="#" className="btn large">Read now</a>
        </div>
      </div>


      </div>


      <Divider />

      <div className="container">
        <div className="section-synopsis section-left-right">
          <img src={imgBabydeer} alt="baby deer with open mouth" className="large-vegetable" id="title-image"/>
          <div className="textbox textbox-constrained">
            <h2>Synopsis</h2>
            <p>Baby deer prefers sweet pecan pie over dirty vegetables -  until Papa deer teaches the magical powers these veggies give us. But not all truths reveal themselves in the form of advice...</p>
            <h2 className="ta-center">~</h2>
            <p>On the surface this book is a piece of propaganda to get children to eat their vegetables, but more subtly it is a commentary on questioning authority with our own observations.
            </p>
          </div>
        </div>
      </div>

      <Divider pattern={2}/>

      <div className="container">
        <div className="section-look-inside">
          <h2 className="ta-center">Look Inside</h2>
          <BookPreview />
        </div>
      </div>

      <Divider pattern={3}/>

      <div className="container">
        <div className="section-features">
          <h3 className="ta-center">Learn colors with vegetables</h3>
          <ImageCarousel images={veggieRainbow}/>
          <div className="d-flex">
            <h3>Learn body parts</h3>
            <img src={imgBabydeerHead} className="large-vegetable" alt="Baby deer looking at a butterly, which is seen reflected in his eye"/>
          </div>
        </div>
      </div>


      <Divider pattern={4}/>
        <div className="container">

        </div>
      <Divider pattern={4}/>
      <Divider pattern={4}/>
      <Divider pattern={4}/>
    </>
  )
}
