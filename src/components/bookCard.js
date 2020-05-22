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
      <img src={cover} alt="Cover of English book, 'The Power of Vegetables'. Baby deer holding a basket of vegetables in it's mouth while rabbit friend holds a carrot"/>
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
            <p>{t.paperback[renderLang] || t.paperback.en}</p>
          </OutboundLink>
        )}
      </div>
    </div>
  </div>
)

export default BookCard

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
  }
}
