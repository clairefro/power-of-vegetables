import React from 'react'

import SEO from '../components/seo'
import BookCard from '../components/bookCard'
import { Link } from '../components/link'
import CommingSoon from '../components/commingSoon'

// images
import imgEN from '../../static/images/thumbs/thumb_en.jpg'
import imgJA from '../../static/images/thumbs/thumb_ja.jpg'
import imgFR from '../../static/images/thumbs/thumb_fr.jpg'

export default ({ pageContext: { langKey } }) => (
  <div className="page-books">
    <SEO
      title="購入"
      description="Kindleおよびペーパーバック形式で販売中。子供に同じ楽しい話をいくつかの言語で読んでみましょう！主人公の子ジカくんは、土で汚れた野菜よりも、甘いピーカンパイが好き。そんな子ジカくんに何とか野菜を食べてもらおうと、お父さんジカは、野菜が身体にくれる魔法の力を教えます。 しかし、真実は、必ずしも望んだとおりの形で明らかになるわけではないようです。。。"
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
        kindleLink="https://mybook.to/PowerOfVegetablesKJP"
        renderLang='ja'
      />
      <BookCard
        cover={imgEN}
        lang="英語"
        kindleLink="https://mybook.to/PowerOfVegetablesKEN"
        paperbackLink="https://mybook.to/PowerOfVegetablesPEN"
        renderLang='ja'
      />
      <BookCard
        cover={imgFR}
        lang="フランス語"
        kindleLink="https://mybook.to/PowerOfVegetablesKFR"
        paperbackLink="https://mybook.to/PowerOfVegetablesPFR"
      />

      <CommingSoon lang={langKey} />

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
