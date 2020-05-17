import React from "react"

import Divider from '../components/divider'
import BookPreview from '../components/bookPreview'

import imgBellpepper from '../../static/images/vegetables/bellpepper.png'
import imgBabydeer from '../../static/images/animals/babydeer.png'

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
        <BookPreview />
        </div>
      </div>

      <Divider pattern={3}/>



      <Divider pattern={4}/>
      <Divider pattern={4}/>
      <Divider pattern={4}/>
      <Divider pattern={4}/>
    </>
  )
}
