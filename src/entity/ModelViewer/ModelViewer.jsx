import React, { useLayoutEffect, useRef, useState } from 'react'
import '@google/model-viewer/dist/model-viewer';
import "./ModelViewer.css"
import Loader from '../../ui/Loader/Loader';
import { createAndApplyTexture } from '../../helpers/createAndApplyTexture';
import toast from 'react-hot-toast';


export const ModelViewer = ({ type = "square", textureImage = "", alt, isLoad }) => {
  const modelViewerTexture = useRef();
  const [load, setload] = useState(true)
  const [error, seterror] = useState(false)
  let check = false;
  // require("../../assets/images/tex1.png")
  useLayoutEffect(() => {
    if (modelViewerTexture?.current && load && textureImage) {
      modelViewerTexture?.current.addEventListener("load", (e) => {
        console.log("texture: load")
        createAndApplyTexture('normalTexture', textureImage, modelViewerTexture?.current)
          .then(() => {
            setload(false)
          })
          .catch(err => console.log(err))
          .finally(() => {
            setload(false)
          })
      })
      modelViewerTexture?.current.addEventListener("error", (e) => {
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
  }, [])
  return (
    <>
      {(load || isLoad) && <Loader text={"Идет загрузка модели ковра"} />}
      {!error && <model-viewer
        ref={modelViewerTexture}
        id={!load ? "vieweractive" : "viewer"}
        loading="lazy"
        src={
          (() => {
            switch (type) {
              case "square":
                return require("../../assets/3dmodels/squarecarpet.glb");
              case "square_with_edges":
                  return require("../../assets/3dmodels/squarecarpet_withedges.glb");
              case "oval_small":
                return require("../../assets/3dmodels/ovalcarpet_small.glb");
              case "oval_big":
                return require("../../assets/3dmodels/ovalcarpet_big.glb");
              case "circle":
                return require("../../assets/3dmodels/circlecarpet.glb");
              default:
                return require("../../assets/3dmodels/squarecarpet.glb");
            }
          })()
        }
        // src={type === "square" ? require("../../assets/3dmodels/carpet.glb") : require("../../assets/3dmodels/ovalcarpet.glb")}
        alt={alt}
        ar
        camera-controls
      >

        {/* slot="ar-button" */}
        <button
          slot='ar-button'
          style={{
            backgroundColor: '#20A4F3',
            color: "white",
            borderRadius: '50px',
            border: 'none',
            position: 'fixed',
            bottom: '16px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '10px 20px',
            boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
            justifyContent: 'center', // Добавлено для выравнивания содержимого по горизонтали
            whiteSpace: 'nowrap', // Предотвращает перенос текста на новую строку
          }}
        >
          <img src={
            require("../../assets/images/view_icon_white.png")}
            alt="иконка"
            style={{ marginRight: '10px', width: '20px', height: '20px' }} />
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>Примерить на свой пол</span>
        </button>
        {/* <div className='ico'> */}
        {/* <img src={require("../../assets/images/ico.png")} alt="" /> */}

        {/* </div> */}

      </model-viewer>}
    </>
  )
}
