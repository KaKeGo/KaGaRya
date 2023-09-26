import React from 'react'

import Navbar from '../containers/Navbar/Navbar'
import Footer from '../containers/Footer/Footer'
import Content_navbar from '../containers/Content_navbar/Content_navbar'


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Content_navbar />
        {children}
      <Footer />
    </div>
  )
}

export default Layout