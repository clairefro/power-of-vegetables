import React from 'react'
import SVG from 'react-inlinesvg'
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'
import { Link } from '../components/link'

// images
import imgClaire from '../../static/images/creators/claire.jpg'
import imgVarvara from '../../static/images/creators/varvara.jpg'
import imgSuga from '../../static/images/creators/suga.jpg'

// icons
import iconInstagram from '../../static/icons/instagram.svg'

export default () => (
  <div className="page-creators">
    <SEO
      title="クリエーター"
      description="『やさいのちから』作者：クレア・フレリク。イラスト：バーバラ・フォミナ。"
    />
    <Fade>
      <div className="container">
        <h2 className="ta-center">クリエーター</h2>

        <div className="creator">
          <div className="creator-section-img">
            <img src={imgClaire} className="responsive" alt="Claire Froelich"/>
            <p className="ta-center">出典　アナスタシア・マヤムシナ</p>
          </div>
          <div className="creator-section-text">
            <h3><strong>クレア・フレリク</strong></h3>
            <p><strong>著者</strong></p>
            <p>「笑いは最高の薬」がセリフ。ウェブディベロッパーでもあり、このサイトを作った。</p>
            <p><Link to="contact" className="link">お問い合わせはこちら</Link></p>
          </div>
        </div>


        <div className="creator reverse">
          <div className="creator-section-img">
            <img src={imgVarvara} className="responsive" alt="Varvara Fomina"/>
          </div>
          <div className="creator-section-text">
            <h3><strong>バーバラ・フォミナ</strong></h3>
            <p><strong>イラストレーター</strong></p>
            <p>現在、フリーランスのイラストレーターとして活動。バーバラ・フォミナのイラスト制作に注ぐ情熱は、言葉では言いつくせない。テーマを問わず、物語がさらに生き生きとするようなイラストを描き続けている。</p>
            <a href="https://www.instagram.com/barbara.fomina/" target="_blank" rel="noopener" className="link d-flex" style={{ alignItems: 'center'}}>
              <SVG src={iconInstagram}/>
              <span style={{marginLeft: '0.5rem'}}>barbara.fomina</span>
            </a>
          </div>
        </div>

        <div className="creator">
          <div className="creator-section-img">
            <img src={imgSuga} className="responsive" alt="Miki Sugawara"/>
          </div>
          <div className="creator-section-text">
            <h3><strong>菅原　美樹</strong></h3>
            <p><strong>翻訳者（日本語）</strong></p>
            <p>社内通訳者として勤務。勤勉さを売りとするが、決して笑いも忘れない。</p>
          </div>
        </div>

      </div>
    </Fade>
  </div>
)
