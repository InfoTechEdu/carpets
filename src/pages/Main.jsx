import React from 'react'
import Categories from '../entity/Categories/Categories'
import CarpetCards from '../entity/CarpetCards/CarpetCards'

export default function Main() {
  return (
    <div className='container mt-3'>
        <h3 className='mb-2'>Выберите ковер</h3>
        <Categories />
        <CarpetCards />
    </div>
  )
}
