import React, { useLayoutEffect, useRef, useState } from 'react'
import '@google/model-viewer/dist/model-viewer';
import "./ModelViewer.css"
import Loader from '../../ui/Loader/Loader';
import { createAndApplyTexture } from '../../helpers/createAndApplyTexture';
import toast from 'react-hot-toast';


export const ModelViewer = ({type = "square",textureImage = "",alt}) => {
  const modelViewerTexture = useRef();
  const [load, setload] = useState(true)
  const [error, seterror] = useState(false)
  let check = false;
  // require("../../assets/images/tex1.png")
  useLayoutEffect(() => {
    if (modelViewerTexture?.current && load && textureImage) {
      modelViewerTexture?.current.addEventListener("load",(e) => {
        createAndApplyTexture('normalTexture',textureImage,modelViewerTexture?.current)
        .then(() => {
          setload(false)
        })
        .catch(err => console.log(err))
        .finally(() => {
          setload(false)
        })
      })
      modelViewerTexture?.current.addEventListener("error",(e) => {
        if (e.detail.type === "loadfailure") {
          setload(false)
          seterror(true)
          if (!check) {
            if (e.detail.type) toast.error("Ошибка загрузки 3D модели")
            // eslint-disable-next-line react-hooks/exhaustive-deps
            check = true;
          }
        }
      })
    }
  },[])
  return (
      <>
      {load && <Loader text={"Идет загрузка модели ковра"} />} 
      {!error && <model-viewer
      ref={modelViewerTexture}
      id={!load ? "vieweractive" : "viewer"}
      loading="lazy"
      src={type === "square" ? require("../../assets/3dmodels/carpet.glb") : require("../../assets/3dmodels/ovalcarpet.glb")} 
      alt={alt}
      camera-controls
      >
        <div className='ico'>
          <img src={require("../../assets/images/ico.png")} alt="" />
        </div>
      </model-viewer>}
      </>
  )
}
