import React from 'react'
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import Img from "gatsby-image/withIEPolyfill"

import { Link } from '../components/link'

const NotFound = ({data}) => {
  return (
    <div className="container">
      <div className="text ta-center">
        <h2>おっと！</h2>
        <Img fluid={data.file.childImageSharp.fluid} style={{width: '70%', margin: '0 auto'}} />
        <p className="ta-center">ページが見つかりませんでした。</p>
        <p className="ta-center">もしかして、<Link to="/"　className="link">ホーム</Link>に移動したいでしょうか。</p>
        <p className="ta-center">それとも、<Link to="/books" className="link">絵本を買いたい</Link>でしょう。</p>
      </div>
    </div>
  )
}

export default NotFound

export const query = graphql`
  query {
    file(relativePath: { eq: "animals/tootfamily.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1579) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
