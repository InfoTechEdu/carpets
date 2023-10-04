import React, { useEffect, useRef, useState } from 'react'
import CarpetCard from '../../ui/CarpetCard/CarpetCard'
import useObserver from '../../hooks/useObserver'
import { useCategoryFilterStore } from '../Categories/CategoryFilterStore'
import Loader from '../../ui/Loader/Loader'
import { useProductsStore } from '../../pages/Main'
import { StorageServices } from '../../services/StorageServices/StorageServices'


export default function CarpetCards() {
    const products = useProductsStore((state) => state.products)
    const [carpetsm, setCarpetsm] = useState([])
    const [carpets, setCarpets] = useState([])
    const [load, setload] = useState(true)
    const filtredAt = useCategoryFilterStore(state => state.filtredAt)
    useEffect(() => {
      if (filtredAt !== "all") {
        setCarpets(carpetsm.filter(el => el.Категория === filtredAt))
      } else {
        if (carpets?.length === 0) {
          products.forEach((el) => {
            console.log("Product: " + JSON.stringify(el));
            //#edit. Fix
            el.Изображение = el.Изображение.replace(".png", ".jpg");
            StorageServices.getImage(el?.Изображение).then(url => {
              console.log("Url was get: " + url);
              const obj = {
                ...el,
                Изображение: url
                }
                setCarpets(carpets => [...carpets,obj])
                setCarpetsm(carpets => [...carpets,obj])
                setload(false)
            })
          })
        } else {
          setCarpets(carpetsm)
        }
      }
    },[filtredAt, products])
    let lastElement = useRef()
    useObserver(lastElement,carpets?.length > products?.length,false, () => {

    })
  return (
    <div className='row mt-3'>
      {load ? <div className='posabs'>
        <Loader text={"Идет загрузка ковров"}/>
      </div> :<>
        {carpets?.map((carpet,id) => <div key={id} className='col-xl-3 col-lg-3 col-md-6 col-6 my-2'>
            <CarpetCard carpet={carpet} />
        </div>)}
        <div ref={lastElement} style={{height:20,marginBottom:20,backgroundColor:"#ffffff00"}}/>
        </>
      }
    </div>
  )
}
