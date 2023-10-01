/* eslint-disable no-unused-vars */
import React, { useLayoutEffect, useState } from 'react'
import './CarpetModel.css'
import { ModelViewer } from '../ModelViewer/ModelViewer';

export default function CarpetModel({textureImage,typeform}) {
    const [texture, settexture] = useState(null)
    const [type, settype] = useState("square")
    useLayoutEffect(() => {
      if (typeform && textureImage) {
        settype(typeform)
        settexture(textureImage)
      }
    },[typeform])
    // square
  return (
    <div className='CarpetModel'>
        {texture && <ModelViewer type={type} textureImage={texture} alt="uploads_files_3998079_burger_2.glb" />}
    </div>
  )
}

