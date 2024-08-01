import React from 'react'
import Navvbar from '../Navvbar/Navvbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Navvbar/>

    <Outlet/>


    <Footer/>
   
   </>
  )
}
