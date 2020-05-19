import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader
import { Carousel } from 'react-responsive-carousel'

const ImageCarousel = ({ images }) => (
  <Carousel
    autoPlay
    infiniteLoop
    emulateTouch
    showStatus={false}
  >
    {images.map((img, i) => (
      <div key={i}>
          <img src={img} alt={`vegetable ${i + 1}`} />
      </div>
    ))}
  </Carousel>
)

export default ImageCarousel
