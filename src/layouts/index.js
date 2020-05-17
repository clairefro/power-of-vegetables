import React from 'react'

import Navbar from '../components/navbar'

import '../styles/index.scss'

const Layout = ({ children }) => (
  <>
  <Navbar />
  <div className="nav-spacer" />
   {children}
  </>
)

export default Layout
