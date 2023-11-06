import React from 'react'
import imgs1 from '../../public/imgs1.png'
import imgs2 from '../../public/imgs2.png'

function service() {
  return (
    <>
    <div className="service bg-gradient-to-r from-blue-900 via-black to-black pb-[24px] flex  item-center justify-center gap-20  pb-[85px] pt-20">
      <div className="box bg-gray-300  py-1 px-1  h-[250px]  item-center justify-center rounded-sm">
        <img src={imgs1} alt=""  className='w-[150px] h-[120px] m-1'/>
        <h1 className='capitalize  font-bold text-1xl t'>fullstack developer</h1>
        <p className='w-[150px] text-[9px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Reiciendis fuga </p>
          <button
      
      className="inline-flex items-center px-5 py-1 mt-3 bg-gray-800 border border-transparent rounded-sm font-semibold text-[8px] items-center text-white uppercase tracking-widest active:bg-blue-900 transition ease-in-out duration-150 ">
      more learn
    </button>
      </div>
      {/* box2 */}
      <div className="box bg-gray-300 py-1 px-1  h-[250px]  item-center justify-center rounded-sm">
        <img src={imgs2} alt=""  className='w-[150px] h-[120px] m-1'/>
        <h1 className='capitalize  font-bold text-1xl'>graphic designer</h1>
        <p className='w-[150px] text-[9px]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          Reiciendis fuga </p>
          <button
      
      className="inline-flex items-center mt-3 px-5 py-1 bg-gray-800 border border-transparent rounded-sm font-semibold text-[8px] items-center text-white uppercase tracking-widest active:bg-blue-900 transition ease-in-out duration-150 ">
      more learn
    </button>
      </div>

    </div>
    </>
  )
}

export default service