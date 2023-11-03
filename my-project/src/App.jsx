import React from 'react';
import hamze from '../public/img2.jpg'
import shape1 from '../public/shape1.png'
import shape2 from '../public/shape2.png'
import shape3 from '../public/shape3.png'


function App (){

  return(
    <>
    <div className='bg-blue-950 text-white flex justify-around p-3'>
    <h1 className=' text-orange-600 capitalize font-bold '>hamze dek</h1>
    <div className="menu flex gap-5 cursor-pointer">
      <ul>
        <li>home</li>
      </ul>
      <ul>
        <li>about</li>
      </ul>
      <ul>
        <li>service</li>
      </ul>
      <ul>
        <li>contect</li>
      </ul>
    </div>
    </div>
    {/* <div className="back  position: relative; ">
      <img src={shape1} alt="" className='mx-[500px] mt-10 w-[20px] position: ;'/>
      <img src={shape2} alt="" />
      <img src={shape3} alt="" />
      <img src={shape1} alt="" />
      <img src={shape2} alt="" />
      <img src={shape3} alt="" />
    </div> */}
    <div className="dashboard flex  ">
     <div className="name ml-10 mt-[150px]"> 
     <h1 className='capitalize  text-4xl text-orange-600  font-bold '> iam hamze dek</h1> 
      <p className='capitalize  text-2xl text-blue-900 '>fullstack developer</p>
      <button type='submit' className='bg-orange-600 text-blue-950 p-1 px-4 rounded-lg font-bold uppercase'>submit</button>
      </div>
      <img src={hamze} alt="" className='w-[250px] mt-5 ml-[300px] rounded-lg shadow-md shadow-black ' />
    </div>

    </>
  )
}


export default App