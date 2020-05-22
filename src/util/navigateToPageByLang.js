// ex:
// /books => /fr/books
// /ja/books => /fr/books

import { navigate } from 'gatsby'
export const navigateToPageByLang = (currentLang, selectedLang, currentSlug) => {
  if(currentLang===undefined) {
    navigate(`/`)
  }
  // do nothing if already on page of selected lang
  if (selectedLang === currentLang) return null
  if (currentSlug === undefined) return navigate('/')

  // handle homepage specially
  const landingPattern = /^\/(\w{2})?\/?$/
  if (currentSlug.match(landingPattern)) {
    if (selectedLang === 'en') {
      navigate(`/`)
      return
    } else {
      navigate(`/${selectedLang}`)
      return
    }
  }

  // get slug without lang prefix
  const strippedSlug = currentSlug.match(/^\/(\w{2}\/)?(\w+\/)*(\w+)\/?$/)[3]
  if (selectedLang === 'en') {
    navigate(`/${strippedSlug}`)
    return
  } else {
    navigate(`/${selectedLang}/${strippedSlug}`)
    return
  }
}
