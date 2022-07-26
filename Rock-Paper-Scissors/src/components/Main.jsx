import React from 'react'

function Main() {
    return (
        <div className='flex w-full my-8 mx-auto justify-center items-center mt-32'>


            <div className='triangle w-full h-3/5 flex items-center flex-col'>
                <div className='flex items-center justify-center gap-24 -mt-12 '>

                    <div className='h-36 w-36 bg-white flex items-center justify-center rounded-full border-[1rem] border-blue-700  top-6'>
                        <img src="/public/images/icon-paper.svg" alt="" />
                    </div>

                    <div className='h-36 w-36 bg-white flex items-center justify-center rounded-full border-[1rem] border-yellow-400 '>
                        <img src="/public/images/icon-rock.svg" alt="" />
                    </div>
                </div>

                <div className='h-36 w-36 bg-white flex items-center justify-center rounded-full border-[1rem] border-red-600'>
                    <img src="/public/images/icon-scissors.svg" alt="" />
                </div>
            </div>

        </div>
    )
}

export default Main