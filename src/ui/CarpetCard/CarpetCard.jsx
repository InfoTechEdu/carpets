import React, { useEffect, useRef, useState } from 'react'
import './CarpetCard.css'
import { Link } from 'react-router-dom'
import { StorageServices } from '../../services/StorageServices/StorageServices'
export default function CarpetCard({carpet}) {
  let observer = useRef()
  let element = useRef()
  const [visible, setvisible] = useState(false)
  useEffect(() => {
        if (observer.current) {
          observer.current.disconnect();
          setvisible(false)
        }
        let cb = (entries,observer) => {
          if (entries[0].isIntersecting) {
            setTimeout(() => { 
              setvisible(carpet.id)
             }, Math.random() * 1000)
             console.log(Math.random() * 500);
          }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(element?.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Link ref={element} to={`/carpet/${carpet?.code}`} className={['CarpetCard ',carpet.id === visible ? " anim" : ""]}>
        <div className="CarpetCardImage">
            {carpet?.image ? <img src={StorageServices.getImage(carpet?.image)} alt="" /> : "Image not found"}
        </div>
        <p className="CarpetCardTitle">{carpet.code}</p>
        <p className="CarpetCardCategory">{carpet.categoryname}</p>
    </Link>
  )
}
