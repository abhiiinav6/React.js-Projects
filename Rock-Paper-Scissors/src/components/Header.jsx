import React from 'react'

function Header() {
    return (
        <div className='w-full h-48 flex justify-center items-center py-2 mt-10'>
            <div className='h-full bg-transparent rounded border-4 border-gray-300 w-7/12 flex items-center'>
                <div className='flex justify-between items-center'>
                    <div className="text-5xl text-slate-100 ">
                        <h1>ROCK</h1>
                        <h1>PAPER</h1>
                        <h1>SCISSORS</h1>
                    </div>
                    <div className="bg-white w-2/5 rounded">
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header