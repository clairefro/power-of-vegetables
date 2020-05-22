import React from 'react'

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
            <Link to="/">{t.home[currentLang]}</Link>
            <Link to="/books">{t.buy[currentLang]}</Link>
            <Link to="/creators">{t.creators[currentLang]}</Link>
          </div>
          <div className="footer-column footer-col-2">
            <Link to="/books">{t.privacy[currentLang]}</Link>
            <Link to="/creators">{t.site[currentLang]}</Link>
            <Link to="/contact">{t.contact[currentLang]}</Link>
          </div>
          <div className="footer-column footer-col-3">
            <LanguagePicker />
          </div>
        </div>
        <MailchimpSubscribeForm />


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

const t = {
  home: {
    en: "Home",
    ja: "ホーム",
    fr: "Accueil",
  },
  buy: {
    en: "Buy the book",
    ja: "絵本を買う",
    fr: "Achetez le livre",
  },
  creators: {
    en: "About the Creators",
    ja: "クリエーターについて",
    fr: "Sur les créateurs",
  },
  privacy: {
    en: "Privacy Policy",
    ja: "プライバシー ポリシー",
    fr: "Politique de confidentialité",
  },
  site: {
    en: "About this site",
    ja: "このサイトについて",
    fr: "Information site",
  },
  contact: {
    en: "Contact",
    ja: "お問い合わせ",
    fr: "Contact",
  }
}
