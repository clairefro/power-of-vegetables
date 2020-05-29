import React from 'react';

const CommingSoon = ({lang}) => (
  <p className="ta-center">{t.comingSoon[lang]}</p>
)

export default CommingSoon

const t ={
  comingSoon: {
    en:'Coming soon in Portuguese, Russian, German, and Spanish!',
    fr:'Bientôt disponible en portugais, russe, allemand, et espagnol !',
    ja:'近日中にリリース予定 ： ポルトガル語、ロシア語、ドイツ語、スペイン語',
  }
}
