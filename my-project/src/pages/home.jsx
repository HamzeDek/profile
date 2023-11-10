import React from 'react'
import hamze from '../../public/img3.png'

const home = () => {
  return (
    <>
     <div className="dashboard flex bg-gradient-to-r from-blue-900 via-black to-black p-[4.9px]">
      
     <div className="name ml-10 mt-[150px]"> 
     <h1 className='capitalize  text-4xl text-orange-600  font-bold '> iam hamze dek</h1> 
      <p className='capitalize  text-1xl text-white '>fullstack developer</p>
      <button
      
      className="inline-flex items-center px-6 py-2 bg-orange-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ">
      send 
    </button>
      </div>
      <img src={hamze} alt="" className='w-[250px] mt-5 ml-[200px] ' />
    </div>
    </>
  )
}

export default home