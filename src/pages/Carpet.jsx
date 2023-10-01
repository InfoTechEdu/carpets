import React, { useEffect, useState } from 'react'
import BackButton from '../ui/BackButton/BackButton'
import BottomInfo from '../entity/BottomInfo/BottomInfo'
import CarpetModel from '../entity/CarpetModel/CarpetModel';
import { useParams } from 'react-router-dom';
import { StorageServices } from '../services/StorageServices/StorageServices';

const all = require("../template.json");
export default function Carpet() {
    const {id} = useParams();
    const [carpet, setcarpet] = useState({})
    useEffect(() => {
      async function asnc() {
        const carpetfind = all.find((el) => el.code === id)
        const textname = carpetfind.texture;
        const url = await StorageServices.getTexture(textname)
        setcarpet({...carpetfind,texture:url})
      }
      asnc()
    },[])
  return (
    <div className="carpet" >
        <div className='container mt-3'>
            <BackButton />
            <CarpetModel textureImage={carpet?.texture} typeform={carpet?.form}/>
        </div>
        <BottomInfo carpet={carpet}/>
    </div>
  )
}
