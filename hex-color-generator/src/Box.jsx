import React from 'react'

function Box({colorCode}) {
  return (
    <div className='box' style={{background: colorCode}} >{colorCode}</div>
  )
}

export default Box