import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"

import { Link } from '../components/link'

const NotFound = ({data}) => {
  return (
    <div className="page-not-found">
      <div className="container">
        <div className="text ta-center">
          <h2>Oups...</h2>
          <p className="ta-center">Page non trouvée</p>
          <Img fluid={data.file.childImageSharp.fluid} style={{width: '60%', margin: '0 auto'}} />
          <p className="ta-center">Peut-être voulez-vous aller à <Link to="/" className="link">la page d'accueil</Link> ?</p>
          <p className="ta-center">Ou peut-être voulez-vous <Link to="/books" className="link">acheter le livre</Link> ?</p>
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
