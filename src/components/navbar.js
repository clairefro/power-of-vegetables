import React, { useState, useEffect } from 'react'
import SVG from 'react-inlinesvg'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'

// local
import { Link } from './link'
import AccessibleFocusOutline from '../util/components/accessibleFocusOutline'

// images
import imgSmallPepper from '../../static/images/vegetables/bellpepper-sm.png'

// icons
import iconArrow from '../../static/icons/arrow.svg'

const Navbar = () => {
  // get navbar bg image for lazy loading
  const data = useStaticQuery(graphql`
    query navBackground {
      file(relativePath: { eq: "accents/nav.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const bgImgData = data.file.childImageSharp.fluid

  const [open, setOpen] = useState(false)
  const [y, setY] = useState(0)
  const [deg, setDeg] = useState(0)

  useEffect(()=> {
    if (typeof window !== undefined) {
      window.addEventListener('keyup', handleKeyup)
      return () => window.removeEventListener('keyup', handleKeyup)
    }
  },[])

  useEffect(()=> {
    setY(open ? 80 : 0)
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
      <BackgroundImage
        Tag="section"
        className="navbar-background"
        fluid={bgImgData}
      >
        <div className={`nav-menu ${open ? "open" : null}`}>
          <Link to="/" className="nav-menu-left"><img src={imgSmallPepper} alt="bell pepper" onClick={toggleMenu} /></Link>
          <div className="nav-menu-right">
            <Link to="/creators" onClick={toggleMenu}>Creators</Link>
            <Link to="/books" className="cta" onClick={toggleMenu}>Buy now</Link>
          </div>
        </div>
      </BackgroundImage>
      <AccessibleFocusOutline>
        <button id="navbar-toggle" style={arrowStyle} onClick={toggleMenu}>
          <SVG src={iconArrow} />
        </button>
      </AccessibleFocusOutline>
    </div>
  )
}

export default Navbar
