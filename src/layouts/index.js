import React from 'react'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import '../styles/index.scss'

const Layout = ({ children }) => (
  <div className ="page">
    <Navbar />
    <div className="nav-spacer" />
     {children}
     <script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
     <Footer />
  </div>
)

export default Layout
