import React from 'react'
import SVG from 'react-inlinesvg'

import imgNav from '../../static/images/accents/nav.png'
import iconArrow from '../../static/icons/arrow.svg'

const Navbar = ({}) => (
  <div className="navbar">
    <div className="navbar-background" style={{ backgroundImage: `url('${imgNav}')`}}>
    </div>
    <button id="navbar-toggle">
      <SVG src={iconArrow} />
    </button>
  </div>

)

export default Navbar
