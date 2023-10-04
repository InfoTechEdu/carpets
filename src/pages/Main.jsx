import React, { useEffect, useState } from 'react'
import Categories from '../entity/Categories/Categories'
import CarpetCards from '../entity/CarpetCards/CarpetCards'
import { read, utils } from 'xlsx';
import { StorageServices } from '../services/StorageServices/StorageServices';
import { create } from 'zustand';
export const useProductsStore = create((set) => ({
  products:[],
  setProducts:(products) => set(() => ({
    products
  }))
}))

export default function Main({load,setload}) {
  return (
    <div className='container mt-3'>
        <h3 className='mb-2'>Выберите ковер</h3>
        <Categories />
        <CarpetCards load={load} setload={setload} />
    </div>
  )
}
