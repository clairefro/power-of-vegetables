import React, { useState } from 'react'
import FlippingPages from 'flipping-pages'

import page1 from '../../static/images/book-pages/en/page-1.png'
import page2 from '../../static/images/book-pages/en/page-2.png'
import page3 from '../../static/images/book-pages/en/page-3.png'
import page4 from '../../static/images/book-pages/en/page-4.png'
import page5 from '../../static/images/book-pages/en/page-5.png'
import page6 from '../../static/images/book-pages/en/page-6.png'

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
        className="App-pages"
        direction="horizontal"
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
      <button
        onClick={previous}
        disabled={!selected}
      >Previous</button>
      <button
        onClick={next}
        disabled={selected  === totalPages}
      >Next</button>
    </div>
  )
}

export default BookPreview
