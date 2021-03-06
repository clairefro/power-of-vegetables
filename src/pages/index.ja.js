import React, { useState, useEffect } from "react"
import Fade from 'react-reveal/Fade'
import { graphql } from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
import UIfx from 'uifx'

import SEO from '../components/seo'
import { Link } from '../components/link'
import Divider from '../components/divider'
import BookPreview from '../components/bookPreview'
import ImageCarousel from '../components/imageCarousel'

// vegetables
import imgBellpepper from '../../static/images/vegetables/bellpepper.png'
import imgCarrots from '../../static/images/vegetables/carrots.png'
import imgSquash from '../../static/images/vegetables/squash.png'
import imgSpinach from '../../static/images/vegetables/spinach.png'
import imgEggplant from '../../static/images/vegetables/eggplant.png'
import imgBeets from '../../static/images/vegetables/beets.png'

// sound
import sound from '../../static/sounds/fart.mp3'

// animals
import imgBabydeer from '../../static/images/animals/babydeer.png'
import imgBabydeerHead from '../../static/images/animals/babydeerhead.png'
import imgRabbitToot from '../../static/images/animals/toot.png'
import imgPapadeer from '../../static/images/animals/papa.png'

// preview pages
import page1 from '../../static/images/book-pages/ja/page-1.jpg'
import page2 from '../../static/images/book-pages/ja/page-2.jpg'
import page3 from '../../static/images/book-pages/ja/page-3.jpg'
import page4 from '../../static/images/book-pages/ja/page-4.jpg'
import page5 from '../../static/images/book-pages/ja/page-5.jpg'
import page6 from '../../static/images/book-pages/ja/page-6.jpg'

// Array-ify
const veggieRainbow = [
  imgBellpepper,
  imgCarrots,
  imgSquash,
  imgSpinach,
  imgEggplant,
  imgBeets,
]

const pages = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
]

export default ({ pageContext: {langKey}, data }) => {
  const [fart, setFart]= useState({play: ()=>console.log("can't play yet")})
  const lazyBellpepper = data.file.childImageSharp.fluid

  useEffect(()=> {
    setFart(new UIfx(sound))
  },[])

  return (
    <>
      <SEO
        title="ホーム"
        description="主人公の子ジカくんは、土で汚れた野菜よりも、甘いピーカンパイが好き。そんな子ジカくんに何とか野菜を食べてもらおうと、お父さんジカは、野菜が身体にくれる魔法の力を教えます。"
      />
      <div className="container">
        <Fade>
          <div className="section-title">
            <Img
              fluid={lazyBellpepper}
              alt="bell pepper"
              objectFit="contain"
              className={`large-vegetable title-pepper ${langKey === 'ja' ? 'ja' : ''} `}
              id="title-image"
            />
            <div className="textbox">
              <h1 className="title-main">
                <span className="w">やさい</span>
                <span className="w">の</span>
                <span className="w">ちから</span>
              </h1>
              <p><span className="w" style={{marginRight: '6rem'}}>著者</span><span className="w">クレア・フレリク</span></p>
              <p><span className="w" style={{marginRight: '2rem'}}>イラスト</span><span className="w">バーバラ・フォミナ</span>　</p>
              <Link
                to="/books"
                className="btn large"
                onClick={() => fart.play()}
              >
                今すぐ読む
              </Link>
            </div>
          </div>
        </Fade>
      </div>


      <Divider />

      <a id="synopsis"></a>
      <div className="container">
        <Fade>
          <div className="section-synopsis d-horizontal">
            <div className="deer-wrapper">
              <img src={imgBabydeer} alt="baby deer with open mouth" className="responsive mw-600" id="title-image"/>
            </div>
            <div className="textbox textbox-constrained">
              <h2>あらすじ</h2>
              <p>主人公の子ジカくんは、土で汚れた野菜よりも、甘いピーカンパイが好き。そんな子ジカくんに何とか野菜を食べてもらおうと、お父さんジカは、野菜が身体にくれる魔法の力を教えます。 しかし、真実は、必ずしも望んだとおりの形で明らかになるわけではないようです。。。</p>
              <h2 className="ta-center tilde">~</h2>
              <p>一見、この本は、子どもたちに野菜を食べさせることだけを目的としているように思えるかもしれません。しかし、深く読み込んでいくと、大人になるつれ、「これは、恐らくああなるだろう」、などという固まった考えを持ってしまっているのではないか、と問われていることに気づくでしょう。生きていくうえで、最も重要なのは、常識や知識より、人生をユーモアの目で見ること。そのメッセージに、子どもに限らず、あらゆる年齢層の人が大きくうなずくことでしょう。
              </p>
            </div>
          </div>
        </Fade>
      </div>

      <Divider pattern={2}/>

      <div className="container">
        <Fade>
          <div className="section-look-inside">
            <h2 className="ta-center">試し読み</h2>
            <BookPreview pages={pages}/>
          </div>
        </Fade>
      </div>

      <Divider pattern={3}/>

      <div className="container">
        <div className="section-features">
          <Fade>
            <h3 className="ta-center"><span className="w">野菜で</span><span className="w">色を</span><span className="w">学ぶ</span></h3>
            <ImageCarousel images={veggieRainbow}/>
          </Fade>

          <Fade>
            <div className="d-horizontal">
              <h3><span className="w">身体の</span><span className="w">部分を</span><span className="w">学ぶ</span></h3>
              <img src={imgBabydeerHead} className="responsive mw-600" alt="Baby deer looking at a butterly, which is seen reflected in his eye"/>
            </div>
          </Fade>
          <Fade>
            <div className="d-horizontal reverse">
              <img src={imgRabbitToot} className="responsive mw-600" alt="Shocked rabbit tooting a rainbow while pausing eating a carrot"/>
              <h3><span className="w">一緒に</span><span className="w">笑う</span></h3>
            </div>
          </Fade>
        </div>
      </div>


      <Divider />
      <div className="container">
        <Fade>
          <div className="section-reviews">
            <img src={imgPapadeer} alt="Papa deer admiring his vegetable garden" className="responsive mw-600"/>
            <h2>レビュー</h2>
            <div className="review">
              <span className="review-text">息子は物語のエンディングに<span className="w"><strong>笑いすぎてしまった。。。</strong></span></span>
              <p className="review-author">- ケンドラー・B、　母親</p>
            </div>
            <div className="review">
              <span className="review-text">やっと、<strong>子供と同じくらい笑わせてくれた</strong>絵本が見つけた</span>
              <p className="review-author">- ファーハン・D、　双子の父親</p>
            </div>
          </div>

          <div className="d-flex jc-center">
            <Link to="/books"
              className="btn large"
            >
              今すぐ読む
            </Link>
          </div>

        </Fade>
      </div>
    </>
  )
}

// get bellpepper for lazy load
export const query = graphql`
  query {
    file(relativePath: { eq: "vegetables/bellpepper.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1579) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`
