import React, { useState, useEffect } from 'react'
import SVG from 'react-inlinesvg'


import AccessibleFocusOutline from '../util/components/accessibleFocusOutline'

import imgNav from '../../static/images/accents/nav.png'
import imgNavtab from '../../static/images/accents/navtab.png'
import iconArrow from '../../static/icons/arrow.svg'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [y, setY] = useState(0)
  const [deg, setDeg] = useState(0)

  useEffect(()=> {
    window.addEventListener('keyup', handleKeyup)
    return () => window.removeEventListener('keyup', handleKeyup)
  },[])

  useEffect(()=> {
    setY(open ? 100 : 0)
    setDeg(open ? 180 : 0)
  },[open])

  const toggleMenu = () => {
    setOpen(!open)
  }

  const handleKeyup = (e) => {
    const isEsc = e.keyCode === 27
    if (isEsc) {
      setOpen(false)
    }
  }

  const navStyle = {
    transform: `translateY(${y}px)`,
    transition: 'transform ease-in 0.3s'
  }

  const arrowStyle = {
    transform: `rotate(${deg}deg)`,
    transition: 'transform ease 0.3s'
  }

  return (
    <div className="navbar" style={navStyle}>
      <div className="navbar-background" style={{ backgroundImage: `url('${imgNav}')` }}>
      </div>
      <AccessibleFocusOutline>
        <button id="navbar-toggle" style={arrowStyle} onClick={toggleMenu}>
          <SVG src={iconArrow} />
        </button>
      </AccessibleFocusOutline>
    </div>
  )
}



export default Navbar
