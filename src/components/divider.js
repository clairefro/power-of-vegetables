import React from 'react'

import yellowStrip from '../../static/images/accents/strip.png'

const Divider = ({ pattern }) => {
  let transform = 'none'
  if (pattern) {
    switch (true) {
      case pattern === 2:
        transform = 'scaleX(-1)'
      break
      case pattern === 3:
        transform = 'scaleY(-1)'
        break
      case pattern === 4:
        transform = 'scaleY(-1) scaleX(-1)'
        break
    }
  }
  const style = {
    backgroundImage: `url('${yellowStrip}')`,
    transform
  }
  return (
    <div className="divider" style={style}>
    </div>
  )
}

export default Divider
