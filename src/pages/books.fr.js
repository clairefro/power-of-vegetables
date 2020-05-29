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
      title="Achetez"
      description="Disponible en format Kindle et livre de poche. Lisez la même histoire amusante à votre enfant en plusieurs langues ! Bébé chevreuil préfère les tartes aux noix de pécan sucrées aux légumes sales - jusqu'à ce que Papa chevreuil nous apprenne les pouvoirs magiques que ces légumes nous donnent. Mais toutes les vérités ne se révèlent pas sous forme de conseils..."
    />
    <div className="container">
      <div className="title-box">
        <h2 className="ta-center">Acheter le livre</h2>
        <p className="ta-center">Disponible en format Kindle et en livre de poche.</p>
        <p>Lisez la même histoire amusante à votre enfant en plusieurs langues !</p>
        <Link to="/#synopsis" className="link">À propos du livre</Link>
      </div>

      <BookCard
        cover={imgFR}
        lang="français"
        renderLang="fr"
        kindleLink="https://mybook.to/PowerOfVegetablesKFR"
        paperbackLink="https://mybook.to/PowerOfVegetablesPFR"
      />
      <BookCard
        cover={imgEN}
        lang="anglais"
        renderLang="fr"
        kindleLink="https://mybook.to/PowerOfVegetablesKEN"
        paperbackLink="https://mybook.to/PowerOfVegetablesPEN"
      />
      <BookCard
        cover={imgJA}
        lang="japonais"
        renderLang="fr"
        kindleLink="#"
      />

      <CommingSoon lang={langKey}/>

    </div>
  </div>
)
