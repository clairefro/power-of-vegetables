// for internal linking within current language code namespace

import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

import { usePageContext } from '../context/pageContext'

const Link = ({ to, ...rest }) => {
  const { langKey: locale } = usePageContext()

  // abort if no "to" prop assigned
  if (typeof to === 'undefined' || to === "#") return null

  // route English paths normally
  if (locale === 'en') return <GatsbyLink {...rest} to={to} />

  // otherwise, route to prefixed paths
  const trimmedTo = to.replace(/^\/+/, '') // remove leading slash if present

  return <GatsbyLink {...rest} to={`/${locale}/${trimmedTo}`} />
}

export { Link }
