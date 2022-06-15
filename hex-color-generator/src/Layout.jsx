import React from 'react'

function Layout() {
    const randomHexColor = () => {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    return (
        <div className='layout'>
            for(let i=0;i<30;i++){
                <Layout colorCode={randomHexColor()} />
            }
        </div>
    )
}

export default Layout