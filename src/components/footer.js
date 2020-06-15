import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'
import SVG from 'react-inlinesvg'

import { Link } from './link'
import MailchimpSubscribeForm from './mailchimpSubscribeForm'
import LanguagePicker from './languagePicker'

// images
import imgBackground from '../../static/images/accents/footer.png'

// context
import { usePageContext } from '../context/pageContext'

// iconInstagram
import iconInstagram from '../../static/icons/instagram.svg'

const Footer = () =>　{
  const { langKey: currentLang } = usePageContext()
  const data = useStaticQuery(graphql`
    query footerBackground {
      file(relativePath: { eq: "accents/footer.png" }) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 2000) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const bgImgData = data.file.childImageSharp.fluid

  return (
    <BackgroundImage
      className="footer"
      fluid={bgImgData}>
      <div className="footer-content">

        <div className="footer-columns">
          <div className="footer-column footer-col-1">
            <Link to="/">{t.home[currentLang]}</Link>
            <Link to="/books">{t.buy[currentLang]}</Link>
            <Link to="/creators">{t.creators[currentLang]}</Link>
          </div>
          <div className="footer-column footer-col-2">
            <Link to="/privacy">{t.privacy[currentLang]}</Link>
            <Link to="/site">{t.site[currentLang]}</Link>
            <Link to="/contact">{t.contact[currentLang]}</Link>
          </div>
          <div className="footer-column footer-col-3">
            <LanguagePicker />
            <div className="socials">
              <a href="https://www.instagram.com/powerofvegetables/" target="_blank" rel="noopener noreferrer">
                <SVG src={iconInstagram} />
              </a>
            </div>
          </div>
        </div>



        <MailchimpSubscribeForm />


        <div className="mobile-footer mobile-only">
          <LanguagePicker />
          <div className="socials">
            <a href="https://www.instagram.com/powerofvegetables/" target="_blank" rel="noopener noreferrer">
              <SVG src={iconInstagram} />
            </a>
          </div>
        </div>



        <div className="footer-copyright">
          <p>Copyright &copy; {new Date().getFullYear()}</p>
        </div>


      </div>
    </BackgroundImage>
  )
}　

export default Footer

const t = {
  home: {
    en: "Home",
    ja: "ホーム",
    fr: "Accueil",
    es: "Home",
  },
  buy: {
    en: "Buy the book",
    ja: "絵本を買う",
    fr: "Achetez le livre",
    es: "Compra el libro",
  },
  creators: {
    en: "About the Creators",
    ja: "クリエーターについて",
    fr: "Créateurs",
    es: "Creadores",
  },
  privacy: {
    en: "Privacy Policy",
    ja: "プライバシー ポリシー",
    fr: "Politique de confidentialité",
    es: "Política de privacidad",
  },
  site: {
    en: "About this site",
    ja: "サイト情報",
    fr: "À propos du site",
    es: "Acerca de este sitio",
  },
  contact: {
    en: "Contact",
    ja: "お問い合わせ",
    fr: "Contact",
    es: "Contacto",
  }
}
