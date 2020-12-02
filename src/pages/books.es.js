import React from "react"

import SEO from "../components/seo"
import BookCard from "../components/bookCard"
import { Link } from "../components/link"
import CommingSoon from "../components/commingSoon"
import TootBox from "../components/tootBox"

// images
import imgEN from "../../static/images/thumbs/thumb_en.jpg"
import imgJA from "../../static/images/thumbs/thumb_ja.jpg"
import imgFR from "../../static/images/thumbs/thumb_fr.jpg"
import imgES from "../../static/images/thumbs/thumb_es.jpg"

export default ({ pageContext: { langKey } }) => (
  <div className="page-books">
    <SEO
      title="Compra el libro"
      description="Disponible en Kindle y en ediciones de papel. ¡Lee a tus hijos la misma divertida historia en varias lenguas! Bebé ciervo prefiere la tarta dulce de nueces a las verduras cubiertas de tierra, hasta que papá ciervo le enseña los poderes mágicos que nos dan estos alimentos. Pero no todas las verdades se revelan con la forma de los consejos..."
    />
    <div className="container">
      <div className="title-box">
        <h2 className="ta-center">Compra el libro</h2>
        <p className="ta-center">
          Disponible en Kindle y en ediciones de papel. ¡Lee a tus hijos la
          misma divertida historia en varias lenguas!
        </p>
        <Link to="/#synopsis" className="link">
          Acerca del libro
        </Link>
      </div>
      <BookCard
        cover={imgES}
        lang="español"
        kindleLink="https://mybook.to/PowerOfVegetablesKES"
        paperbackLink="https://mybook.to/PowerOfVegetablesPES"
        renderLang="es"
      />
      <BookCard
        cover={imgEN}
        lang="inglés"
        kindleLink="https://mybook.to/PowerOfVegetablesKEN"
        paperbackLink="https://mybook.to/PowerOfVegetablesPEN"
        renderLang="es"
      />
      <BookCard
        cover={imgFR}
        lang="francés"
        kindleLink="https://mybook.to/PowerOfVegetablesKFR"
        paperbackLink="https://mybook.to/PowerOfVegetablesPFR"
        renderLang="es"
      />
      <BookCard
        cover={imgJA}
        lang="japonés"
        kindleLink="https://mybook.to/PowerOfVegetablesKJP"
        renderLang="es"
      />

      <CommingSoon lang={langKey} />

      <h5 className="ta-center">Pedos alrededor del mundo</h5>
      <p className="ta-center">Aprenda a decir "un pedo" en cualquier lugar.</p>
      <TootBox />
    </div>
  </div>
)
