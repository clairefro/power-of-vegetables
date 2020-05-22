import React from 'react'
import SEO from '../components/seo'

import ContactForm from '../components/contactForm'

export default () => (
  <div className="page-contact">
    <SEO
      title="お問い合わせ"
      description="『やさいのちから』についてご質問や書評などがありましたら、下記のフォームで著者に送信できます。"
    />
    <div className="container">
      <div className="title-box">
        <h2 className="ta-center">お問い合わせ</h2>
        <p><span className="w">ご質問や書評などを下記のフォームで</span><span className="w">著者にお問い合わせできます。</span></p>
      </div>
      <ContactForm />
    </div>
  </div>
)
