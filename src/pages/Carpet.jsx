import React, { useEffect, useState } from 'react'
import BackButton from '../ui/BackButton/BackButton'
import BottomInfo from '../entity/BottomInfo/BottomInfo'
import CarpetModel from '../entity/CarpetModel/CarpetModel';
import { useParams } from 'react-router-dom';
import { StorageServices } from '../services/StorageServices/StorageServices';
import { useProductsStore } from './Main';
import Loader from '../ui/Loader/Loader';

export default function Carpet() {
    const all = useProductsStore(state => state.products)
    const {id} = useParams();
    const [carpet, setcarpet] = useState(false)
    const [load, setload] = useState(true)
    useEffect(() => {
        all.forEach((el) => {
          if (el.Код === id) {
            StorageServices.getTexture(el?.Текстура)
            .then(url => {
              if (el) {
                setcarpet({...el,texture:url})
                setload(false)
              }
            })
          }
        })
    },[load,all])
  return (
    <div className="carpet" >
        <div className='container mt-3'>
              <BackButton />
              <CarpetModel load={load} textureImage={carpet?.Текстура} typeform={carpet?.Форма}/>
        </div>
        <BottomInfo carpet={carpet}/>
    </div>
  )
}
