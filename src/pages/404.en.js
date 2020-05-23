import React from 'react'
import { graphql } from 'gatsby'
import Fade from 'react-reveal/Fade'
import Img from "gatsby-image/withIEPolyfill"

import { Link } from '../components/link'

const NotFound = ({data}) => {
  return (
    <div className="page-not-found">
      <div className="container">
        <div className="text ta-center">
          <h2>Ooops...</h2>
          <p className="ta-center">Page not found</p>
          <Img fluid={data.file.childImageSharp.fluid} style={{width: '60%', margin: '0 auto'}} />
          <p className="ta-center">Maybe you want to go <Link to="/" className="link">Home</Link> instead?</p>
          <p className="ta-center">Or <Link to="/books" className="link">buy the book</Link>!</p>
        </div>
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
