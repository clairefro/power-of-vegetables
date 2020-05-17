import React from "react"

import Divider from '../components/divider.js'

import imgBellpepper from '../../static/images/vegetables/bellpepper.png'

export default () => {
  return (
    <>
      <div className="container">
      <div className="section-title">
        <img src={imgBellpepper} alt="bell pepper" className="large-vegetable" id="title-image"/>
        <div className="textbox">
          <h1 className="title-main">The Power of Vegetables</h1>
          <p>by Claire Froelich</p>
          <p>Illustrated by Varvara Fomina</p>
        </div>
      </div>


      </div>


      <Divider />
      <Divider pattern={2}/>
      <Divider pattern={3}/>
      <Divider pattern={4}/>
    </>
  )
}
