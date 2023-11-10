import React from 'react';
import Home from './home'
import About from './about'
import Contect from './Contect'
import Service from './Service'

import {Routes, Route,Link} from 'react-router-dom'

const dashboard = () =>{

  return(
    <>
    
    <div className='bg-gradient-to-r from-blue-900 via-black to-black p-[12px] text-white flex justify-around p-3'>
    <h1 className=' text-white capitalize font-bold '> <Link to="/">hamze dek</Link></h1>
    <div className="menu flex gap-5 cursor-pointer">
    
      <ul>
        <li>
          <Link to='About' className='text-[13px] uppercase'>About</Link>
          <div className='bg-gradient-to-r from-orange-600 via-orange-600 to-blue-0 w-7 h-[2px] mt-[-5px] '></div>
          </li>
      </ul>
      <ul>
        <li>
          <Link to='Service' className='text-[13px] uppercase' >Service</Link>
          <div className='bg-gradient-to-r from-orange-600 via-orange-600 to-blue-0 w-7 h-[2px] mt-[-5px] '></div>
          </li>
      </ul>
      <ul>
        <li>
          <Link to='Contect'  className='text-[13px] uppercase'>Contact</Link>
          <div className='bg-gradient-to-r from-orange-600 via-orange-600 to-blue-0 w-7 h-[2px] mt-[-5px] '></div>
          </li>
      </ul>
    </div>
    
    </div>
   <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='service' element={<Service/>}></Route>
      <Route path='/Contect' element={<Contect/>}></Route>
    </Routes>
   
   
    </>
  )
}


export default dashboard