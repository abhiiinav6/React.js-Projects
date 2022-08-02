import React from 'react'

function Rules() {
  return (
    <div className='bg-white  w-[100%] text-center my-10 flex flex-col gap-16 py-16  z-50'>
      <h1 className='text-4xl font-bold'>RULES</h1>

      <div>
        <div className='flex items-center justify-center gap-4'>


          <div className='h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer border-blue-700  top-6'>
            <img src="/images/icon-paper.svg" alt="" />
          </div>


          <div className=' flex flex-col'>
            <h3 className='my-0'>Beats</h3>
            <h1 className='text-[5rem] my-[-3rem]'>
              &#8592;
            </h1>
          </div>


          <div className='h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer border-yellow-400 '>
            <img src="/images/icon-scissors.svg" alt="" />
          </div>

        </div>
        <h3 className='oo'>&#8593;</h3>
        <div className='h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer border-red-600 mt-8 mx-auto'>
          <img src="/images/icon-rock.svg" alt="" />
        </div>

      </div>

    </div>
  )
}

export default Rules