import React, { useEffect, useRef, useState } from 'react'
import "./Categories.css"
import { useCategoryFilterStore } from './CategoryFilterStore'
import { useCategoriesStore } from '../../pages/Main';

export default function Categories() {
  const allCategories = useCategoriesStore(state => state.categories)

  const filtredAt = useCategoryFilterStore(state => state.filtredAt)
  const setFilter = useCategoryFilterStore(state => state.setFilter)

  const changeCategory = (en) => {
    setFilter(en)
  }

  const ref = useRef();
  // useEffect(() => {
  //   ref?.current?.scrollTo({
  //     left:100,
  //     behavior:"smooth"
  //   })
  //   setTimeout(() => { 
  //     ref?.current.scrollTo({
  //       left:0,
  //       behavior:"smooth"
  //     })
  //    }, 500)
  // },[ref])
  return (
    <div className='category-wrapper' ref={ref}>
        {allCategories?.map((category,id) => <div key={id} onClick={() => {changeCategory(category.slug); console.log("SLug:" + category.slug)} } className={`category-item ${category.slug === filtredAt ? "active" : ""}`}>
            <p>{category.categoryru}</p>
        </div>)}
    </div>
  )
}