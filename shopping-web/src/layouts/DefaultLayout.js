import React from 'react'
import Discount from '../components/Discount'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function DefaultLayout({children}) {
  return (
    <div>
        <Navbar/>
        <Discount />
        {children}
        <Footer/>
    </div>
  )
}
