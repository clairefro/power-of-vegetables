// powered by getform.io
import React from 'react'

// context
import { usePageContext } from '../context/pageContext'

const ContactForm = () => {
  const { langKey } = usePageContext()
  return (
    <div className="contact-form">
      <form action="https://getform.io/f/50e76ce9-abaf-4dbf-96cf-8097111def24" className="contact" method="POST">
        <label htmlFor="name">{t.name[langKey]}</label>
        <input type="text" name="name" />
        <label htmlFor="email">{t.email[langKey]}</label>
        <input type="email" name="email" required/>
        <label htmlFor="message">{t.message[langKey]}</label>
        <textarea rows="6" name="message" required />
        <button type="submit">{t.send[langKey]}</button>
      </form>
    </div>
  )
}

export default ContactForm

const t = {
  name: {
    en: "Name",
    ja: "お名前",
    fr: "Nom",
    es: "Nombre",
  },
  email: {
    en: "Email",
    ja: "メールアドレス",
    fr: "Courriel",
    es: "Correo electrónico",
  },
  message: {
    en: "Message",
    ja: "メッセージ",
    fr: "Message",
    es: "Mensaje",
  },
  send: {
    en: "Send",
    ja: "送信",
    fr: "Envoyer",
    es: "Enviar",
  }
}
