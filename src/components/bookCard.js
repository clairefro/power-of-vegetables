import React from 'react'
import SVG from 'react-inlinesvg'
import PropTypes from 'prop-types'
import { OutboundLink } from "gatsby-plugin-google-analytics"

// icons
import iconBook from  '../../static/icons/book.svg'
import iconEbook from  '../../static/icons/ebook.svg'

const BookCard = ({ cover, lang, kindleLink, paperbackLink, renderLang }) => (
  <div className="book-card">
    <div className="book-card-section-image">
      <h4>{lang}</h4>
      <img src={cover} alt={t.alt[renderLang]}/>
    </div>
    <div className="book-card-section-links">
      <div className="link-group">
        {kindleLink && (
          <OutboundLink href={kindleLink} target="_blank" rel="noopener" className="book-link link-ebook">
            <SVG src={iconEbook} className="icon-ebook"/>
            <p>Kindle</p>
          </OutboundLink>
        )}
        {paperbackLink && (
          <OutboundLink href={paperbackLink} target="_blank" className="book-link link-book">
            <SVG src={iconBook}/>
            <p>{t.paperback[renderLang]}</p>
          </OutboundLink>
        )}
      </div>
    </div>
  </div>
)

export default BookCard

BookCard.defaultProps = {
  renderLang: 'en',
}

BookCard.propTypes = {
  cover: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  kindleLink: PropTypes.string,
  paperbackLink: PropTypes.string,
}

const t = {
  paperback: {
    en: "Paperback",
    ja: "ペーパーバック",
    fr: "livre de poche",
    es: "libro de bolsillo",
  },
  alt: {
    en: "Cover of English book, 'The Power of Vegetables'. Baby deer holding a basket of vegetables in it's mouth while rabbit friend holds a carrot",
    ja: "「やさいのちから」の表紙。鹿の赤ちゃんが野菜の入ったバスケットを咥え、ウサギの友達がニンジンを持っています。",
    fr: "Couverture du livre The Power of Vegetables'. Bébé cerf tenant un panier de légumes dans sa gueule pendant qu'un ami lapin tient une carotte",
    es: "Portada del libro 'El poder de las verduras'. Un ciervo bebé con una cesta de verduras en la boca mientras su amigo conejo sostiene una zanahoria.",
  }
}
