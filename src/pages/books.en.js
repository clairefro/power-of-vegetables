import React from 'react'

import SEO from '../components/seo'
import BookCard from '../components/bookCard'
import { Link } from '../components/link'

// images
import imgEN from '../../static/images/thumbs/thumb_en.jpg'
import imgJA from '../../static/images/thumbs/thumb_ja.jpg'

export default () => (
  <div className="page-books">
    <SEO
      title="Buy"
      description="Available in Kindle and paperback formats. Expose your child the same fun story in several languages! Baby deer prefers sweet pecan pie over dirty vegetables -  until Papa deer teaches the magical powers these veggies give us. But not all truths reveal themselves in the form of advice..."
    />
    <div className="container">
      <div className="title-box">
        <h2 className="ta-center">Buy the book</h2>
        <p className="ta-center">Available in Kindle and paperback formats. Read the same fun story to your child in several languages!</p>
        <Link to="/#synopsis" className="link">About the book</Link>
      </div>

      <BookCard
        cover={imgEN}
        lang="English"
        kindleLink="#"
        paperbackLink="#"
      />
      <BookCard
        cover={imgEN}
        lang="French"
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
