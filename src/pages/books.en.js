import React from 'react'

import SEO from '../components/seo'
import BookCard from '../components/bookCard'

// images
import imgEN from '../../static/images/thumbs/thumb_en.png'
import imgJA from '../../static/images/thumbs/thumb_ja.png'

export default () => (
  <div className="page-books">
    <SEO
      title="Buy"
      description="Available in Kindle and paperback formats. Expose your child the same fun story in several languages! Baby deer prefers sweet pecan pie over dirty vegetables -  until Papa deer teaches the magical powers these veggies give us. But not all truths reveal themselves in the form of advice..."
    />
    <div className="container">
      <div className="title-box">
        <h2 className="ta-center">Buy the book</h2>
        <p className="ta-center">Available in Kindle and paperback formats. Expose your child the same fun story in several languages!</p>
      </div>

      <BookCard
        cover={imgEN}
        lang="English"
        kindleLink="#"
        paperbackLink="#"
      />
      <BookCard
        cover={imgJA}
        lang="Japanese"
        kindleLink="#"
        paperbackLink="#"
      />

    </div>
  </div>
)
