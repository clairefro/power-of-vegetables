import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'

const ImageCarousel = ({ images }) => (
  <Carousel
    autoPlay
    infinteLoop
    emulateTouch
    showStatus={false}
  >
    {images.map((img, i) => (
      <div key={i}>
          <img src={img} />
      </div>
    ))}
  </Carousel>
)

export default ImageCarousel
