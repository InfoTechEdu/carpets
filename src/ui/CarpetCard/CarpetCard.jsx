import React, { useEffect, useRef, useState } from 'react'
import './CarpetCard.css'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'
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
            // setTimeout(() => { 
            //   setvisible(carpet?.id)
            //  }, Math.random() * 500)
          }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(element?.current)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Link ref={element} to={`/carpet/${carpet?.Код}`} className={['CarpetCard',"anim"].join(' ')}>
        <div className="CarpetCardImage">
            <LazyLoadImage width="100%" height="100%" effect="blur" loading='lazy' src={carpet?.Изображение} alt={carpet?.Код} />
             {/* <img loading="lazy" src={carpet?.Изображение} alt={carpet?.Код} /> */}
        </div>
        <p className="CarpetCardTitle">{carpet?.Код}</p>
        <p className="CarpetCardCategory">{carpet?.Категория}</p>
    </Link>
  )
}
