import React from 'react';
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Footer } from '../components/Footer/Footer';
import { NavBar } from '../components/NavBar/NavBar';





import {
    Home,
    Servicios,
    Nosotros,
    Seguimiento,
    Cotiza,
    Contacto,
    Landing_1,
    Landing_2,
    Landing_empresa_1,
    LandingEmpresa2,
    ThankYouPage,

  } from "../pages";



export const AppRouter = () => {



  return (
    <BrowserRouter>
    <NavBar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/nosotros" element={<Nosotros />} />
            <Route path="/seguimiento" element={<Seguimiento />} />
            <Route path="/cotiza" element={<Cotiza />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer/>

    </BrowserRouter>
    
  )
}
