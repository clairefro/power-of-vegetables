import React from 'react'
import SVG from 'react-inlinesvg'
import PropTypes from 'prop-types'

// icons
import iconBook from  '../../static/icons/book.svg'
import iconEbook from  '../../static/icons/ebook.svg'

const BookCard = ({ cover, lang, kindleLink, paperbackLink }) => (
  <div className="book-card">
    <div className="book-card-section-image">
      <h4>{lang}</h4>
      <img src={cover} alt="Cover of English book, 'The Power of Vegetables'. Baby deer holding a basket of vegetables in it's mouth while rabbit friend holds a carrot"/>
    </div>
    <div className="book-card-section-links">
      <div className="link-group">
        {kindleLink && (
          <a href={kindleLink} target="_blank" className="book-link">
            <SVG src={iconEbook} />
            <p>Kindle</p>
          </a>
        )}
        {paperbackLink && (
          <a href={paperbackLink} target="_blank" className="book-link">
            <SVG src={iconBook} />
            <p>Paperback</p>
          </a>
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
