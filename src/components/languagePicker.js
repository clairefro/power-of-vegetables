import React, { useState, useEffect } from 'react'
import UIfx from 'uifx'
import SVG from 'react-inlinesvg'

// utils
import { navigateToPageByLang } from '../util/navigateToPageByLang'

// context
import { usePageContext } from '../context/pageContext'

// icons
import iconGlobe from '../../static/icons/globe.svg'

// sounds
import sound from '../../static/sounds/fart.mp3'

const LanguagePicker = () => {
  const { langKey: currentLang, slug } = usePageContext()

  const [fart, setFart]= useState({play: ()=>console.log("can't fart yet")})

  useEffect(()=> {
    setFart(new UIfx(sound))
  },[])

  const handleLangChange = (e) => {
    fart.play()
    navigateToPageByLang(currentLang, e.target.value, slug)
  }

  return (
    <div className="lang-component">
      <SVG src={iconGlobe} className="footer-icon"/>
      <select name="lang-select" id="lang-select" onChange={handleLangChange}>
        <option value="en" selected={currentLang==='en'}>English</option>
        <option value="fr" selected={currentLang==='fr'}>Français</option>
        <option value="ja" selected={currentLang==='ja'}>日本語</option>
      </select>
    </div>
  )
}

export default LanguagePicker
