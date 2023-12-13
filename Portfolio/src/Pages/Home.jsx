import SideBar from '../Components/SideBar/SideBar'
import Inicio from './Inicio'
import React from 'react'
import { SobreMi } from './SobreMi'
import { Proyectos } from './Proyectos'
import { Footer } from '../Components/Footer'
import { Contacto } from './Contacto'



const Home = () => {
  return (
    <>
      <SideBar />
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  )
}

export default Home