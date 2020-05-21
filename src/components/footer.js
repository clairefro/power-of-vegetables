import React, { useState, useEffect } from 'react'

import { Link } from './link'
import MailchimpSubscribeForm from './mailchimpSubscribeForm'
import LanguagePicker from './languagePicker'

// images
import imgBackground from '../../static/images/accents/footer.png'

// context
import { usePageContext } from '../context/pageContext'

const Footer = () =>　{
  const { langKey: currentLang } = usePageContext()
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
            <LanguagePicker />
          </div>
        </div>
        <MailchimpSubscribeForm lang={'en'} />


        <div className="mobile-footer mobile-only">
          <LanguagePicker />
        </div>

        <div className="footer-copyright">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>

      </div>
    </div>
  )
}　

export default Footer
