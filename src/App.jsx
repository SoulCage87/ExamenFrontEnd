import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contacto from './components/Contacto'
import './styles.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {


  return (
    <>
    
  <Navbar></Navbar>

   <BrowserRouter>
   <Routes>
    <Route  path='/' element={<Home/>}> </Route>
    <Route path = '/contacto' element = {<Contacto></Contacto>}></Route>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
