import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Contacto from './components/Contacto'
import Footer from './components/Footer'
import './styles.css'
import { BrowserRouter, Route, Routes} from 'react-router-dom'


function App() {


  return (
    <>
    
 

   <BrowserRouter>
   <Navbar></Navbar>
   <Routes>
    <Route  path='/' element={<Home/>}> </Route>
    <Route path = '/contacto' element = {<Contacto></Contacto>}></Route>
   </Routes>

   </BrowserRouter>
 <Footer></Footer>
    </>
  )
}

export default App
