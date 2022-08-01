import React from 'react'
import { useState } from 'react'

function Header() {
    const [score, setScore] = useState(0);


    return (
        <div className='w-full h-48 flex justify-center items-center py-4 mt-10'>
            <div className='h-full bg-transparent rounded-lg border-4 border-gray-300 w-10/12 flex items-center justify-around'>
                <div className='flex justify-between items-center'>
                    <div className="text-3xl text-slate-100 ">
                        <h2>ROCK</h2>
                        <h2>PAPER</h2>
                        <h2>SCISSORS</h2>
                    </div>

                </div>
                <div className="bg-white w-1/3 rounded-lg my-5 h-4/5 flex items-center justify-center">
                    <div className='text-center'>
                        <h3>SCORE</h3>
                        <h1 className='text-7xl text-xx'>{score}</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Header