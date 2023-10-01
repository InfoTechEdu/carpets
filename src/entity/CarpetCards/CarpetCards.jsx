import React, { useEffect, useRef, useState } from 'react'
import CarpetCard from '../../ui/CarpetCard/CarpetCard'
import useObserver from '../../hooks/useObserver'
import { useCategoryFilterStore } from '../Categories/CategoryFilterStore'
import Loader from '../../ui/Loader/Loader'


export default function CarpetCards() {
  const template = require("../../template.json");
    const [carpets, setCarpets] = useState(template)
    const filtredAt = useCategoryFilterStore(state => state.filtredAt)
    useEffect(() => {
      if (filtredAt !== "all") {
        setCarpets(template.filter(el => el.categoryname === filtredAt))
      } else {
        setCarpets(template)
      }
    },[filtredAt, template])
    let lastElement = useRef()
    useObserver(lastElement,true,false, () => {
        for (let i = 0; i < 10; i++) {
          // setCarpets(c => [...c,{
          //   id:"31e23d232d",
          //   name: "BEING DT03071.102",
          //   category: {
          //     slug:"children",
          //     name:"Коврики для детской"
          //   },
          //   model:"./path/to/model.glb",
          //   image: require("../../assets/images/carpet2.png"),
          //   wblink:"http://wildberries.com",
          // }])
        }
    })
  return (
    <div className='row mt-3'>
      {false ? <div className='posabs'>
        <Loader text={"Идет загрузка ковров"}/>
      </div> :<>
        {carpets.map((carpet,id) => <div key={id} className='col-xl-3 col-lg-3 col-md-6 col-6 my-2'>
            <CarpetCard carpet={carpet} />
        </div>)}
        <div ref={lastElement} style={{height:20,marginBottom:20,backgroundColor:"#ffffff00"}}/>
        </>
      }
    </div>
  )
}
