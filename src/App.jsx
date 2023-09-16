import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Bolsa from './components/bolsa/bolsa'
import Principal from './components/principal/principal'
import NavBar from './components/navBar/navBar'
import Coleccion from './components/coleccion/coleccion'
import Escenario from './components/escenario/escenario'

function App() {

  return (
    <div className="container">
      <NavBar/>
      <Routes>
        <Route path="/" element={<Principal/>}/>
        <Route path="/bolsa" element={<Bolsa/>}/>
        <Route path="/coleccion" element={<Coleccion/>}/>
        <Route path="/escenario" element={<Escenario/>}/>
      </Routes>
    </div>
  )
}

export default App
