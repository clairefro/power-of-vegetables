import React from 'react'
import Fade from 'react-reveal/Fade'

import SEO from '../components/seo'

export default () => (
  <div className="page-privacy">
    <SEO
      title="プライバシーポリシー"
      description="このサイトでユーザーについて収集されているデータに関する情報。"
    />
    <Fade>
      <div className="container">
        <h2 className="ta-center"><span className="w">プライバシー</span><span className="w">ポリシー</span></h2>
          <div className="text overflow-x-container">
            <p>最終更新　令和2年5月22日</p>
            <p>本サイトはcookie（クッキー）と第三者のデータサービスを使用して、マーケティングの洞察を取得し、顧客関係を維持し、同サイトの機能性を向上させていただきます。</p>
            <p>本サイトの使用 により、ご利用者は前述の規約条件を承諾したものとみなされます。 </p>
            <div className="overflow-x-container">
              <table>
                <tr>
                  <th>種類</th>
                  <th>目的</th>
                  <th>収集者</th>
                  <th>備考</th>
                </tr>
                <tr>
                  <td>クッキーと第三者のデータ</td>
                  <td>ユーザーの行動を把握し、地域のマーケティングについての洞察を得る</td>
                  <td>Google</td>
                  <td><a href="https://support.google.com/analytics/answer/2799357?hl=en&utm_id=ad" target="_blank" className="link" style={{fontSize: 'inherit'}} rel="noopener noreferrer">ユーザー情報</a>、訪問したページ、クリックされたリンクをトラッキングします。Googleアナリティクスのトラッキングを防ぎたい場合は、このツールをChromeに追加することができます： <a href="https://tools.google.com/dlpage/gaoptout"  target="_blank" className="link" style={{fontSize: 'inherit'}} rel="noopener noreferrer">Google Analytics opt-out add-on</a>.</td>
                </tr>
                <tr>
                  <td>第三者のデータ</td>
                  <td>本の新しいリリースやクーポンを購読者に知らせる</td>
                  <td>Mailchimp</td>
                  <td>データは、ニュースレターの購読フォームでメールを送信した場合にのみ収集される</td>
                </tr>
                <tr>
                  <td>第三者のデータ</td>
                  <td>ユーザーが本の著者に連絡できるようにする</td>
                  <td>Getform</td>
                  <td>データは、ニュースレターの購読フォームでメールを送信した場合にのみ収集される</td>
                </tr>
              </table>
            </div>
          </div>
      </div>
    </Fade>

  </div>
)
