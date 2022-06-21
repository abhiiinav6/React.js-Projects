import React from 'react'

function Box({colorCode}) {
  return (
    <div className='box' style={{background: colorCode}} ><h4>{colorCode}</h4></div>
  )
}

export default Box