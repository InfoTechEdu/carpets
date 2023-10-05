import React, { useEffect, useState } from 'react'
import BackButton from '../ui/BackButton/BackButton'
import BottomInfo from '../entity/BottomInfo/BottomInfo'
import CarpetModel from '../entity/CarpetModel/CarpetModel';
import { useParams } from 'react-router-dom';
import { StorageServices } from '../services/StorageServices/StorageServices';
import { useProductsStore } from './Main';

export default function Carpet() {
    const all = useProductsStore(state => state.products)
    const {id} = useParams();
    const [carpet, setcarpet] = useState(false)
    const [load, setload] = useState(true)
    const [width, setWidth] = useState(null);
    const [length, setLength] = useState(null);
    useEffect(() => {
        all.forEach((el) => {
          console.log("Длина" + el?.Длина);
          if (el.Код === id) {
            console.log("EL.ДЛИНА:" + el.Длина);
            StorageServices.getTexture(el?.Текстура)
            .then(url => {
              if (el) {
                setcarpet({...el,texture:url})
                setload(false)
                setWidth(el.Ширина);
                setLength(el.Длина);
              }
            })
          }
        })
    },[load,all])
  return (
    <div className="carpet" >
        <div className='container mt-3'>
              <BackButton />
              <CarpetModel load={load} textureImage={carpet?.Текстура} typeform={carpet?.Форма} textureLength={length} textureWidth={width}/>
        </div>
        <BottomInfo carpet={carpet}/>
    </div>
  )
}
