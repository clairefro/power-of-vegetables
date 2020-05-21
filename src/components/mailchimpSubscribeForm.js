import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useMailChimpForm } from "use-mailchimp-form"

import { usePageContext } from '../context/pageContext'

const useFormFields = initialState => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
};

const MailchimpSubscribeForm = () => {
  const { langKey } = usePageContext()
  const url = "https://power-of-vegetables.us18.list-manage.com/subscribe/post?u=015049cbab3eb5168be909134&id=792c7ae23f"
  const { status, message, handleSubmit } = useMailChimpForm(url);
  const [params, handleFieldChange] = useFormFields({
    EMAIL: "",
    LANG: langKey
  })
  return (
    <>
    <div className="mailchimp-subscribe-form">
      <p>{t.title[langKey]}</p>
      <form onSubmit={event => handleSubmit(event, params)}>
        <div className="email-field">
          <input
            id="EMAIL"
            name="EMAIL"
            type="email"
            value={params.EMAIL}
            onChange={handleFieldChange}
            placeholder="you@email.com"
            required
          />
          <div className={`mailchimp-response`}>
          {status.loading && t.loading[langKey]}
          {status.error && t.error[langKey]}
          {status.success && t.success[langKey]}
          </div>
        </div>
        <input
          id="mce-LANG"
          name="LANG"
          hidden
          type="text"
          onChange={()=> null}
          value={langKey}
        />
        <button className="btn-subscribe">{t.subscribe[langKey]}</button>
      </form>
    </div>
    </>
  )
}

export default MailchimpSubscribeForm

MailchimpSubscribeForm.defaultProps = {
  lang: 'en',
}

MailchimpSubscribeForm.propTypes = {
  lang: PropTypes.oneOf(['en','ja','fr']).isRequired,
}

const t = {
  title: {
    en: "Get updates & coupons",
    fr: "Restez connecté avec nous",
    ja: "ニュースやお得な情報を購読する",
  },
  placeholder: {
    en: "you@email.com",
    fr: "vous@email.com",
    ja: "you@email.com",
  },
  loading: {
    en: "Sending...",
    fr: "Envoi en cours...",
    ja: "送信中...",
  },
  error: {
    en: "Error: invalid email or already subscribed",
    fr: "Erreur: email invalide ou déjà abonné",
    ja: "エラー：無効なメール、またはすでに登録済み",
  },
  success: {
    en: "Almost there! Click the link sent to your email to confirm.",
    fr: "Merci! Vérifiez votre e-mail pour confirmer.",
    ja: "あともうちょい！メールを確認し、指示に従ってください。",
  },
  subscribe: {
    en: "Subscribe",
    fr: "Abonnez-vous",
    ja: "購読する"
  }
}
