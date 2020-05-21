import React from 'react'

import BookCard from '../components/bookCard'

// images
import imgEN from '../../static/images/thumbs/thumb_en.png'
import imgJA from '../../static/images/thumbs/thumb_ja.png'

export default () => (
  <div className="page-books">
    <div className="container">
      <div className="title-box">
        <h2 className="ta-center">Buy the book</h2>
        <p className="ta-center">Available in Kindle an paperback formats. Expose your child the same fun story in several languages!</p>
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
