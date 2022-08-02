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
            <h3 className='my-0 text-2xl'>Beats</h3>
            <h1 className='text-[5rem] my-[-3rem]'>
              &#8592;
            </h1>
          </div>


          <div className='h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer border-yellow-400 '>
            <img src="/images/icon-scissors.svg" alt="" />
          </div>

        </div>
        <h3 className='text-7xl rotate-[30deg] translate-x-16 m-0'>&#8593;</h3>
        <h3 className='mx-4 p-0 text-2xl rotate-[-60deg] translate-x-20 -translate-y-8'>Beats</h3>
        <h3 className='text-7xl rotate-[-30deg] -translate-x-16 -translate-y-24 m-0'>&#8595;</h3>
        <h3 className='my-0 mx-8 p-0 text-2xl rotate-[60deg] -translate-x-20 -translate-y-32'>
          Beats
        </h3>


        <div className='h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer border-red-600 -mt-28 mx-auto'>
          <img src="/images/icon-rock.svg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Rules