import React from 'react'
import { Link } from '../components/link'
import Fade from 'react-reveal/Fade'
import SEO from '../components/seo'

export default () => (
  <div className="page-site">
    <SEO
      title="サイト情報"
      description="このサイトで利用されているアセットとツールに関する情報。"
    />
    <Fade>
      <div className="container">
        <h2 className="ta-center">サイト情報</h2>
          <div className="text">
            <p>開発者　<a href="https://www.linkedin.com/in/claire-froelich/" target="_blank" className="link" rel="noopener">クレア・フレリク</a></p>
            <p>サイトジェネレーター　<a href="https://www.gatsbyjs.org/" target="_blank" className="link" rel="noopener"> Gatsby</a></p>
            <p>ホスティング　<a href="https://www.netlify.com/" target="_blank" className="link" rel="noopener">Netlify</a></p>
            <p>全イラスト　<a href="https://www.instagram.com/barbara.fomina/" target="_blank" className="link" rel="noopener">Varvara Fomina</a></p>
            <p>イラストの無許可の転載、複製、転用等は禁止。イラストを利用するには、<Link to="/contact" className="link">著者からの許可を取得する</Link>。</p>
            <p>アイコン　<a href="https://www.flaticon.com/" target="_blank" className="link" rel="noopener">Flaticon</a></p>
            <p>おならの音　<a href="https://www.zapsplat.com" target="_blank" className="link" rel="noopener">Zapsplat</a></p>
            <p>お問い合わせフォーム　<a href="https://getform.io/" target="_blank" className="link" rel="noopener">Getform</a></p>
            <p>メーリングリスト　<a href="https://mailchimp.com/" target="_blank" className="link" rel="noopener">Mailchimp</a></p>
          </div>
      </div>
    </Fade>
  </div>
)
