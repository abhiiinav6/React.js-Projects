import React from 'react'

function Main() {
    return (
        <div className='flex w-full my-8 mx-auto justify-center items-center mt-32 relative z-10'>


            <div className='triangle w-full h-3/5 flex items-center flex-col'>
                <div className='flex items-center justify-center gap-20 -mt-16 '>

                    <div className='h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer border-blue-700  top-6'>
                        <img src="/images/icon-paper.svg" alt="" />
                    </div>

                    <div className='h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer border-yellow-400 '>
                        <img src="/images/icon-rock.svg" alt="" />
                    </div>
                </div>

                <div className='h-28 w-28 bg-white flex items-center justify-center rounded-full border-[0.8rem] cursor-pointer border-red-600 mt-8'>
                    <img src="/images/icon-scissors.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Main