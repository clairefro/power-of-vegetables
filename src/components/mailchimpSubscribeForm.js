import React, { useState } from 'react'
import { useMailChimpForm } from "use-mailchimp-form"

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

const MailchimpSubscribeForm = ({ lang }) => {
  const url = "https://power-of-vegetables.us18.list-manage.com/subscribe/post?u=015049cbab3eb5168be909134&id=792c7ae23f"
  const { status, message, handleSubmit } = useMailChimpForm(url);
  const [params, handleFieldChange] = useFormFields({
    EMAIL: "",
    LANG: lang
  });
  return (
    <div>
      <form onSubmit={event => handleSubmit(event, params)}>
        <input
          id="EMAIL"
          name="EMAIL"
          autoFocus
          type="email"
          value={params.EMAIL}
          onChange={handleFieldChange}
          required
        />
        <input
          id="mce-LANG"
          name="LANG"
          hidden
          type="text"
          value={lang}
        />
        <button>Subscribe</button>
      </form>
      {status.loading && messages.loading[lang]}
      {status.error && messages.error[lang]}
      {status.success && messages.success[lang]}
    </div>
  )
}

export default MailchimpSubscribeForm

const messages = {
  loading: {
    en: "Sending...",
    fr: "<FRENCH loading>",
    ja: "<JAPANESE loading>",
  },
  error: {
    en: "Error, or email already subscribed",
    fr: "<FRENCH error>",
    ja: "<JAPANESE error>",
  },
  success: {
    en: "Almost there! Click the link sent to your email to confirm.",
    fr: "<FRENCH success>",
    ja: "<JAPANESE success>",
  },
}
