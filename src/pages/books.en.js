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
import imgPT from "../../static/images/thumbs/thumb_pt.jpg"

export default ({ pageContext: { langKey } }) => (
  <div className="page-books">
    <SEO
      title="Buy"
      description="Available in Kindle and paperback formats. Expose your child the same fun story in several languages! Baby deer prefers sweet pecan pie over dirty vegetables -  until Papa deer teaches the magical powers these veggies give us. But not all truths reveal themselves in the form of advice..."
    />
    <div className="container">
      <div className="title-box">
        <h2 className="ta-center">Buy the book</h2>
        <p className="ta-center">
          Available in Kindle and paperback formats. Read the same fun story to
          your child in several languages!
        </p>
        <Link to="/#synopsis" className="link">
          About the book
        </Link>
      </div>
      <BookCard
        cover={imgEN}
        lang="English"
        kindleLink="https://mybook.to/PowerOfVegetablesKEN"
        paperbackLink="https://mybook.to/PowerOfVegetablesPEN"
      />
      <BookCard
        cover={imgES}
        lang="Spanish"
        kindleLink="https://mybook.to/PowerOfVegetablesKES"
        paperbackLink="https://mybook.to/PowerOfVegetablesPES"
      />
      <BookCard
        cover={imgFR}
        lang="French"
        kindleLink="https://mybook.to/PowerOfVegetablesKFR"
        paperbackLink="https://mybook.to/PowerOfVegetablesPFR"
      />
      <BookCard
        cover={imgPT}
        lang="Portuguese"
        kindleLink="https://mybook.to/PowerOfVegetablesPPT"
        paperbackLink="https://mybook.to/PowerOfVegetablesPBPT"
      />
      <BookCard
        cover={imgJA}
        lang="Japanese"
        kindleLink="https://mybook.to/PowerOfVegetablesKJP"
      />

      <CommingSoon lang={langKey} />

      <h5 className="ta-center">Toots around the world</h5>
      <p className="ta-center">
        Learn how to say "toot", no matter where you eat vegetables.
      </p>
      <TootBox />
    </div>
  </div>
)
