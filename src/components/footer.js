import React from 'react'
import { Link } from 'gatsby'
import SVG from 'react-inlinesvg'

import MailchimpSubscribeForm from './mailchimpSubscribeForm'

import imgBackground from '../../static/images/accents/footer.png'

import iconGlobe from '../../static/icons/globe.svg'

const Footer = () =>　{
  const handleLangChange = (e) => {
    console.log(e.target.value)
  }
  return (
    <div className="footer" style={{ backgroundImage: `url('${imgBackground}')`}}>
      <div className="footer-content">

        <div className="footer-columns">
          <div className="footer-column footer-col-1">
            <Link to="/books">Buy the book</Link>
            <Link to="/creators">About the Creators</Link>
            <Link to="/contact">Contact</Link>
          </div>
          <div className="footer-column footer-col-2">
            <Link to="/books">Privacy Policy</Link>
            <Link to="/creators">About this site</Link>

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
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="ja">日本語</option>
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
