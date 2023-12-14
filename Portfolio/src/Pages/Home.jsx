
import Inicio from './Inicio'
import React from 'react'
import { SobreMi } from './SobreMi'
import { Proyectos } from './Proyectos'
import { Footer } from '../Components/Footer'
import { Contacto } from './Contacto'
import Encabezado from '../Components/Encabezado'



const Home = () => {
  return (
    <>
      <Encabezado />  
      <Inicio />
      <SobreMi />
      <Proyectos />
      <Contacto />
      <Footer />
    </>
  )
}

export default Home