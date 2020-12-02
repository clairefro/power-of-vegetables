import React from "react"

const CommingSoon = ({ lang }) => (
  <p className="ta-center">{t.comingSoon[lang]}</p>
)

export default CommingSoon

const t = {
  comingSoon: {
    en: "Coming soon in Russian!",
    fr: "Bientôt disponible en russe !",
    ja: "近日中にリリース予定 ： ロシア語",
    es: "¡Pronto estará disponible en ruso!",
  },
}
