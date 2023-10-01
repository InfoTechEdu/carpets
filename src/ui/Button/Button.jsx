import React from 'react'
import './Button.css'
export default function Button({title,onClick,bgColor,href}) {
  return (
  <>
    {href && 
      <a href={href} className='Button' style={{backgroundColor:bgColor}}>{title}</a>
    }
    {onClick && 
      <button className='Button' style={{backgroundColor:bgColor}} onClick={onClick}>{title}</button>
    }
  </>
  )
}
