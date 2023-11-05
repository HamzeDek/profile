import React from 'react'
import hamze from '../../public/hamze.png'

const home = () => {
  return (
    <>
     <div className="dashboard flex bg-gradient-to-r from-blue-900 via-black to-black p-[10px]">
      
     <div className="name ml-10 mt-[150px]"> 
     <h1 className='capitalize  text-4xl text-orange-600  font-bold '> iam hamze dek</h1> 
      <p className='capitalize  text-2xl text-white '>fullstack developer</p>
      <button type='submit' className='bg-orange-600 text-white p-1 px-4 rounded-lg font-bold uppercase'>submit</button>
      </div>
      <img src={hamze} alt="" className='w-[250px] mt-5 ml-[300px] rounded-lg shadow-md shadow-black ' />
    </div>
    </>
  )
}

export default home