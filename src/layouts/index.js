import React from 'react'

import Navbar from '../components/navbar'

import '../styles/index.scss'

const Layout = ({ children }) => (
  <>
  <Navbar />
  <div className="nav-spacer" />
   {children}
   <script src="https://code.jquery.com/pep/0.4.3/pep.js"></script> 
  </>
)

export default Layout
