// wrap all pages in PageContextProvider so ancestor componts have access to page context via hooks
import React from 'react'
import { PageContextProvider } from './src/context/pageContext'

export const wrapPageElement = ({ element, props: { pageContext} }) => {
  return <PageContextProvider value={pageContext}>{element}</PageContextProvider>
}
