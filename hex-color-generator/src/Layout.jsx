import React from 'react'
import Box from './Box';
function Layout() {
    const [colorArray, setColorArray] = useState([])
    const randomHexColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    for (let i = 0; i < 30; i++) {
        setColorArray(arr => arr.push(randomHexColor()))
    }
    return (
        <div className='layout'>
            {
                colorArray.map(color => {
                    <Box colorCode={color} />
                })
            }
        </div>
    )
}

export default Layout