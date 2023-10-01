import React, { useEffect, useRef } from 'react'

export default function useObserver(lastElement,max = true,isLoading,callback) {  
      let observer = useRef();
      useEffect(() => {
        if (lastElement?.current){
          if (isLoading) return;
          if (observer.current) observer.current.disconnect();
          let cb = (entries,observer) => {
            if (entries[0].isIntersecting && max) {
              callback()
            }
          };
          observer.current = new IntersectionObserver(cb);
          observer.current.observe(lastElement?.current)
        }
      },[isLoading])
}
