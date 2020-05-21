import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

// context
import { usePageContext } from '../context/pageContext'

import '../styles/index.scss'

const Layout = ({ children }) => {
  const { langKey } = usePageContext()

  let style = { fontFamily: "'Gentium Book Basic', serif"}

  if (langKey === 'ja') {
    style.fontFamily = "'Noto Serif JP', serif"　
  }

  return (
    <div className ="page" style={style}>
      <Navbar />
      <div className="nav-spacer" />
       {children}
       <script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
       <Footer />
    </div>
  )
}

export default Layout
