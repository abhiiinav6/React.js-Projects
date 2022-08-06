import React from 'react'
import Button from './Button'

function RuleButton() {
  return (
    <div className='relative z-10' onClick={()=> window.scrollTo(0,document.body.scrollHeight)}>
        <Button text={"RULES"}/>
    </div>
  )
}

export default RuleButton