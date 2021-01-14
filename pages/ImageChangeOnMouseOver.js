import React from 'react'
import ImageToggleOnMouseOver from '../src/ImageToggleOnMouseOver'

const ImageChangeOnMouseOver = () => {
  return (
    <>
      <ImageToggleOnMouseOver
        primaryImg="/static/places/bw/IMG_1979.jpg"
        secondaryImg="/static/places/IMG_1979.jpg"
      />
      &nbsp;&nbsp;&nbsp;
      <ImageToggleOnMouseOver
        primaryImg="/static/places/bw/IMG_2070.jpg"
        secondaryImg="/static/places/IMG_2070.jpg"
      />
    </>
  )
}

export default ImageChangeOnMouseOver