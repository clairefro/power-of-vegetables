export { wrapPageElement } from './gatsby-ssr'

const scrollTo = (id) => () => {
  const el = document.querySelector(id)
  if (el) return window.scrollTo(0, el.offsetTop - 100)
  return false
}

export const onRouteUpdate = ({ location: { hash } }) => {
  if (hash) {
    window.setTimeout(scrollTo(hash), 10)
  }
}
