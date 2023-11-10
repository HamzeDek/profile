import React from 'react'
import icon1 from '../../public/call.png'
import icon2 from '../../public/location.png'
import icon3 from '../../public/facebook.png'
import icon4 from '../../public/whatsapp.png'
import icon5 from '../../public/git.png'

function Contect() {
  return (
    <>
    <div className="contact bg-gradient-to-r from-blue-900 via-black to-black pb-[21px] flex item-center justify-center">
     
      <div className="form">
        
        <form className='bg-gray-300 bg-opacity-60  flex flex-col gap-5 p-3 w-[350px] mt-[40px]'> 
         <h1 className='text-3xl font-bold capitalize'>contact us</h1>
          <input type="text" placeholder='Your Name 'className='' required />
          <input type="email" placeholder='Enter Your Email'className='' required/>
          <textarea name="" id="" cols="30" rows="5" maxlength="200" placeholder="Comment" className='text-[12px] w-[301px] p-[10px]'></textarea>
          <button className='inline-flex items-center text-center px-6 py-2 bg-orange-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest active:bg-gray-900 transition ease-in-out duration-150 ' required>send</button>
          
          

        </form>
      </div>
      <div className="con bg-gray-300 bg-opacity-100  flex flex-col gap-5 p-5 w-[350px] mt-[40px]">
      <div className="phone">
       <div className="flex">
       <img src={icon1} alt="" className='w-[20px] h-[20px] '/>
        <h2 className='text-black ml-[10px] font-semibold '>Call Me</h2>
       </div>
        <h3>+251910079020</h3>
      </div>
      <div className="location">
       <div className="flex">
       <img src={icon2} alt="" className='w-[20px] h-[20px] '/>
        <h2 className='text-black ml-[10px] font-semibold '>Location</h2>
       </div>
        <h3>Ethiopia,Jigjiga</h3>
      </div>
      <div className="follow">
        <h2>FOLLOW ME</h2>
        <div className="icons flex gap-2">
          <a href="https://www.facebook.com/hamse.dek.58"><img src={icon3} alt="" className='w-[30px] h-[30px] '/></a>
          <a href="https://www.facebook.com/hamse.dek.58"><img src={icon4} alt="" className='w-[30px] h-[30px] '/></a>
          <a href="https://github.com/HamzeDek"><img src={icon5} alt="" className='w-[30px] h-[30px] '/></a>
          
        </div>
      </div>
      </div>

    </div>

    </>
  )
}

export default Contect