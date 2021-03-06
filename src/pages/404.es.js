import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"

import { Link } from '../components/link'

const NotFound = ({data}) => {
  return (
    <div className="page-not-found">
      <div className="container">
        <div className="text ta-center">
          <h2>Ooops...</h2>
          <p className="ta-center">Página no encontrada</p>
          <Img fluid={data.file.childImageSharp.fluid} style={{width: '60%', margin: '0 auto'}} />
          <p className="ta-center">¿Quizás quieras ir a la página <Link to="/" className="link">Home</Link> en su lugar?</p>
          <p className="ta-center">O quizás quieras <Link to="/books" className="link">comprar el libro</Link>!</p>
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
