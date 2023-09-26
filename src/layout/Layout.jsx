import React from 'react'

import Navbar from '../containers/Navbar/Navbar'
import Footer from '../containers/Footer/Footer'


const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
        {children}
      <Footer />
    </div>
  )
}

export default Layout