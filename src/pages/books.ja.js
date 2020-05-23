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
      title="購入"
      description="Available in Kindle and paperback formats. Expose your child the same fun story in several languages! Baby deer prefers sweet pecan pie over dirty vegetables -  until Papa deer teaches the magical powers these veggies give us. But not all truths reveal themselves in the form of advice..."
    />
    <div className="container">
      <div className="title-box">
        <h2 className="ta-center"><span className="w">絵本を</span><span className="w">買う</span></h2>
        <p className="ta-center">Kindleおよびペーパーバック形式で販売中。子供に同じ楽しい話をいくつかの言語で読んでみましょう！</p>
        <Link to="/#synopsis" className="link">この絵本について</Link>
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
      <BookCard
        cover={imgEN}
        lang="フランス語"
        kindleLink="#"
        paperbackLink="#"
      />

    </div>
  </div>
)

//
// export const query = graphql`
//   query {
//     allFile(filter: {relativePath: {regex: "/thumbs/"}}) {
//       nodes {
//         childImageSharp {
//           fluid {
//             base64
//             tracedSVG
//             srcWebp
//             srcSetWebp
//             originalImg
//             originalName
//           }
//         }
//       }
//     }
//   }
// `
