import React from 'react'
import Button from '../../ui/Button/Button'
import './BottomInfo.css'

export default function BottomInfo({carpet}) {
  return (
    <div className='BottomInfo'>
        <div className="container">
        <h4>{carpet?.code}</h4>
        <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 my-xl-2 my-1">
                <Button href={carpet?.wblink} bgColor="#CA11AC" title="Купить на Wildberries"/>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 my-xl-2 my-1">
                <Button href="https://wildberries.com/" bgColor="#20A4F3" title="Примерить на свой пол"/>
            </div>
        </div>
    </div>
</div>
  )
}
