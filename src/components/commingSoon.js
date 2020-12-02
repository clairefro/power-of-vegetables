import React from "react"

const CommingSoon = ({ lang }) => (
  <p className="ta-center">{t.comingSoon[lang]}</p>
)

export default CommingSoon

const t = {
  comingSoon: {
    en: "Coming soon in Portuguese, Russian, and German!",
    fr: "Bientôt disponible en portugais, russe, et allemand !",
    ja: "近日中にリリース予定 ： ポルトガル語、ロシア語、ドイツ語",
    es: "¡Pronto estará disponible en portugués, ruso, y alemán ",
  },
}
