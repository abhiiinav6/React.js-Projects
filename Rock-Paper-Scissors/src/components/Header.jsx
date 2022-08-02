import React from 'react'
import { useState } from 'react'

function Header() {
    const [score, setScore] = useState(0);


    return (
        <div className='w-full h-48 flex justify-center items-center py-4 mt-10 relative z-10 max-w-3xl mx-auto'>
            <div className='h-full bg-transparent rounded-lg border-4 border-gray-300 w-11/12 flex items-center justify-around'>
                <img src="/images/logo.svg" alt="" />
                <div className="bg-white w-1/4 rounded-lg my-5 h-4/5 flex items-center justify-center">
                    <div className='text-center'>
                        <h3>SCORE</h3>
                        <h1 className='text-6xl text-xx'>{score}</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header