import React, { useState, useEffect } from 'react'
if (typeof window !== 'undefined') {
  FlippingPages = require('flipping-pages')
}
import SVG from 'react-inlinesvg'

import AccessibleFocusOutline from '../util/components/accessibleFocusOutline'
import page1 from '../../static/images/book-pages/en/page-1.png'
import page2 from '../../static/images/book-pages/en/page-2.png'
import page3 from '../../static/images/book-pages/en/page-3.png'
import page4 from '../../static/images/book-pages/en/page-4.png'
import page5 from '../../static/images/book-pages/en/page-5.png'
import page6 from '../../static/images/book-pages/en/page-6.png'

import iconArrow from '../../static/icons/arrow.svg'

import 'flipping-pages/FlippingPages.css'

const BookPreview = () => {
  const [selected, setSelected] = useState(0)
  const [totalPages, setTotalPages] = useState(5)

  const handleSelectedChange = (selected) => {
    setSelected(selected)
  }

  const previous = () => {
    setSelected(selected - 1)
  }

  const next = () => {
    setSelected(selected + 1)
  }



  return (
    <div className="book-preview">
      <FlippingPages
        className="book-preview-pages"
        direction="horizontal"
        animationDuration={600}
        selected={selected}
        onSelectedChange={handleSelectedChange}
        /* touch-action attribute is required by pointer events
        polyfill */
        touch-action="none"
      >
        <img src={page1} alt=""/>
        <img src={page2} alt=""/>
        <img src={page3} alt=""/>
        <img src={page4} alt=""/>
        <img src={page5} alt=""/>
        <img src={page6} alt=""/>
      </FlippingPages>
      <div className="book-preview-btns">
        <AccessibleFocusOutline>
          <button
            onClick={previous}
            disabled={!selected}
            className="book-preview-btn previous"
          ><SVG src={iconArrow} style={{transform: 'rotate(90deg)'}}/></button>
        </AccessibleFocusOutline>
        <AccessibleFocusOutline>
          <button
            onClick={next}
            disabled={selected  === totalPages}
            className="book-preview-btn next"
          ><SVG src={iconArrow} style={{transform: 'rotate(270deg)'}}/></button>
        </AccessibleFocusOutline>
        <a href="#" className="book-preview-read-more-link" style={{display: selected === totalPages ? 'block' : 'none' }}>Read more!</a>
      </div>
    </div>
  )
}

export default BookPreview
