import React from 'react'
import Button from '../../ui/Button/Button'
import './BottomInfo.css'

export default function BottomInfo({carpet}) {
    // Ссылка на Wildberries
  return (
    <div className='BottomInfo'>
        <div className="container">
        <h4>{carpet['Код']}</h4>
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 my-xl-2 my-1">
                <Button href={carpet['Ссылка на Wildberries'] ? carpet['Ссылка на Wildberries'] : "https://wildberries.com/def"} bgColor="#CA11AC" title="Купить на Wildberries"/>
            </div>
            {/* <div className="col-xl-6 col-lg-6 col-md-6 col-12 my-xl-2 my-1">
            <button slot="ar-button">AR BUTTON</button>
                <Button  href="https://wildberries.com/" slot="ar-button" bgColor="#20A4F3" title="Примерить на свой пол"/>
            </div> */}
        </div>
    </div>
</div>
  )
}
