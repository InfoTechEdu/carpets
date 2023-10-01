
import React from 'react'
import './Loader.css'
export default function Loader({text}) {
  return (
    <div className='Loader'>
        <div className='LoaderWrapper'>
            <div className="LineWrapper">
                <div className="LineScroller"></div>
            </div>
            <p className="text">{text}</p>
        </div>
    </div>
  )
}
