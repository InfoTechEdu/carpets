import React from 'react'
import './Logo.css'
export default function Logo({image}) {
  return (
    <div className='logo-wrapper'>
        {image ? <img src={image} alt="" /> : <div>Not photo</div>}
    </div>
  )
}
