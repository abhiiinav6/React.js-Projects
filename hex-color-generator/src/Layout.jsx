import React, { useState, useEffect } from 'react'
import Box from './Box';
function Layout({ colorArray }) {

    return (
        <div className='layout'>

            {
                colorArray &&
                colorArray.map((color) => {
                    return <Box colorCode={color} />
                })

            }
        </div>
    )
}

export default Layout