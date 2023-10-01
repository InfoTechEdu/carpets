import React, { useEffect, useRef, useState } from 'react'
import "./Categories.css"
import { useCategoryFilterStore } from './CategoryFilterStore'
export default function Categories() {
  const filtredAt = useCategoryFilterStore(state => state.filtredAt)
  const setFilter = useCategoryFilterStore(state => state.setFilter)
    const categories = [
        {categoryru:"Все",slug:"all"},
        {categoryru:"Детская",slug:"Коврики для детской"},
        {categoryru:"Ванная",slug:"toilet"},
        {categoryru:"Гостинная",slug:"mainroom"},
        {categoryru:"Спальня",slug:"sliperoom"},
    ]
  const changeCategory = (en) => {
    setFilter(en)
  }
  const ref = useRef();
  useEffect(() => {
    console.log(ref?.current);
    ref?.current.scrollTo({
      left:100,
      behavior:"smooth"
    })
    setTimeout(() => { 
      ref?.current.scrollTo({
        left:0,
        behavior:"smooth"
      })
     }, 500)
  },[ref])
  return (
    <div className='category-wrapper' ref={ref}>
        {categories?.map((category,id) => <div key={id} onClick={() => changeCategory(category.slug)} className={`category-item ${category.slug === filtredAt ? "active" : ""}`}>
            <p>{category.categoryru}</p>
        </div>)}
    </div>
  )
}
