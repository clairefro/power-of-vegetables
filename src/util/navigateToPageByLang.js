// ex:
// /books => /fr/books
// /ja/books => /fr/books

import { navigate } from 'gatsby'
export const navigateToPageByLang = (currentLang, selectedLang, currentSlug) => {
  // do nothing if already on page of selected lang
  if (selectedLang === currentLang) return null

  if (currentSlug === undefined) return navigate('/')
  // remvove lang prefix
  const strippedSlug = currentSlug.replace(/\/(\w+)\//, '')

  if (selectedLang === 'en') {
    navigate(`/${strippedSlug}`)
  } else {
    navigate(`/${selectedLang}/${strippedSlug}`)
  }
}
