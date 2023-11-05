import React from 'react';
import Home from './pages/home'
import About from './pages/about'
import Contect from './pages/contect'
import Service from './pages/service'

import {Routes, Route,Link} from 'react-router-dom'

const App = () =>{

  return(
    <>
    
    <div className='bg-blue-950 text-white flex justify-around p-3'>
    <h1 className=' text-orange-600 capitalize font-bold '> <Link to="Home">hamze dek</Link></h1>
    <div className="menu flex gap-5 cursor-pointer">
    
      <ul>
        <li>
          <Link to='About'>about</Link>
          </li>
      </ul>
      <ul>
        <li>
          <Link to='Service'>service</Link>
          </li>
      </ul>
      <ul>
        <li>
          <Link to='Contect'>contect</Link>
          </li>
      </ul>
    </div>
    
    </div>
   <Routes>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/service' element={<Service/>}></Route>
      <Route path='/contect' element={<Contect/>}></Route>
    </Routes>
   
   
    </>
  )
}


export default App