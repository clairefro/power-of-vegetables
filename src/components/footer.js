import React from 'react'
import SVG from 'react-inlinesvg'
import UIfx from 'uifx'

import { Link } from './link'
import MailchimpSubscribeForm from './mailchimpSubscribeForm'

// images
import imgBackground from '../../static/images/accents/footer.png'

// icons
import iconGlobe from '../../static/icons/globe.svg'

import sound from '../../static/sounds/fart.mp3'

// context
import { usePageContext } from '../context/pageContext'

// utils
import { navigateToPageByLang } from '../util/navigateToPageByLang'

const fart = new UIfx(sound)

const Footer = () =>　{
  const { langKey: currentLang, slug } = usePageContext()

  const handleLangChange = (e) => {
    console.log(e.target.value)
    fart.play()
    navigateToPageByLang(currentLang, e.target.value, slug)
  }
  return (
    <div className="footer" style={{ backgroundImage: `url('${imgBackground}')`}}>
      <div className="footer-content">

        <div className="footer-columns">
          <div className="footer-column footer-col-1">
            <Link to="/">Home</Link>
            <Link to="/books">Buy the book</Link>
            <Link to="/creators">About the Creators</Link>
          </div>
          <div className="footer-column footer-col-2">
            <Link to="/books">Privacy Policy</Link>
            <Link to="/creators">About this site</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-column footer-col-3">
            <div className="lang-component">
              <SVG src={iconGlobe} className="footer-icon"/>
              <select name="lang-select" id="lang-select" onChange={handleLangChange}>
                <option value="en">English</option>
                <option value="fr">Français</option>
                <option value="ja">日本語</option>
              </select>
            </div>
          </div>
        </div>
        <MailchimpSubscribeForm lang={'en'} />


        <div className="mobile-footer mobile-only">
          <div className="lang-component">
            <SVG src={iconGlobe} className="footer-icon"/>
            <select name="lang-select" id="lang-select" onChange={handleLangChange}>
              <option value="en" selected={currentLang==='en'}>English</option>
              <option value="fr" selected={currentLang==='fr'}>Français</option>
              <option value="ja" selected={currentLang==='ja'}>日本語</option>
            </select>
          </div>
        </div>

        <div className="footer-copyright">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>

      </div>
    </div>
  )
}　

export default Footer
