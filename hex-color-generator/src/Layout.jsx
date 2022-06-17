import React, { useState, useEffect } from 'react'
import Box from './Box';
function Layout(colorArray) {

    return (
        <div className='layout'>

            {
                colorArray.length !== 0 ?
                    colorArray.map((color) => {
                        return <Box colorCode={color} />
                    })
                    : null

            }
        </div>
    )
}

export default Layout