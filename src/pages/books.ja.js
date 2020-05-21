import React from 'react'

import SEO from '../components/seo'
import BookCard from '../components/bookCard'

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
        <h2 className="ta-center">絵本を買う</h2>
        <p className="ta-center">Kindleおよびペーパーバック形式で販売中。 子供に同じ楽しい話をいくつかの言語で読んでみましょう！</p>
      </div>

      <BookCard
        cover={imgJA}
        lang="日本語"
        kindleLink="#"
        paperbackLink="#"
        renderLang='ja'
      />

      <BookCard
        cover={imgEN}
        lang="英語"
        kindleLink="#"
        paperbackLink="#"
        renderLang='ja'
      />


    </div>
  </div>
)
