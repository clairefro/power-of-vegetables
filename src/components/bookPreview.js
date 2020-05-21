import React, { useState, useEffect } from 'react'
import SVG from 'react-inlinesvg'

import { Link } from './link'

import AccessibleFocusOutline from '../util/components/accessibleFocusOutline'

import page1 from '../../static/images/book-pages/en/page-1.png'
import page2 from '../../static/images/book-pages/en/page-2.png'
import page3 from '../../static/images/book-pages/en/page-3.png'
import page4 from '../../static/images/book-pages/en/page-4.png'
import page5 from '../../static/images/book-pages/en/page-5.png'
import page6 from '../../static/images/book-pages/en/page-6.png'

import iconArrow from '../../static/icons/arrow.svg'

import 'flipping-pages/FlippingPages.css'

const pages = [
  page1,
  page2,
  page3,
  page4,
  page5,
  page6,
]

const BookPreview = () => {
  const [canUseDOM, setCanUseDOM] = useState(false)
  const [canUseFlipping, setCanUseFlipping] = useState(false)
  // Can't import FlippingPages due to SSR window reference error. Import after mount instead
  const [FlippingPages, setFlippingPages] = useState(null)
  const [selected, setSelected] = useState(0)
  const [totalPages] = useState(pages.length - 1)

  const handleSelectedChange = (selected) => {
    setSelected(selected)
  }

  const previous = () => {
    setSelected(selected - 1)
  }

  const next = () => {
    setSelected(selected + 1)
  }

  useEffect(()=> {
    setCanUseDOM(true)
  },[])

  // import FlippingPages after mount
  useEffect(() => {
    if(canUseDOM) {
      async function getFlippingPages() {
        setFlippingPages(await import('flipping-pages'))
      }
      getFlippingPages()
    }
  },[canUseDOM])

  useEffect(() => {
    if(FlippingPages !== null) {
      setCanUseFlipping(true)
    }
  }, [FlippingPages])

  return (
    <div className="book-preview">
      {canUseFlipping && (
        <FlippingPages.default
          className="book-preview-pages"
          direction="horizontal"
          animationDuration={600}
          selected={selected}
          onSelectedChange={handleSelectedChange}
          /* touch-action attribute is required by pointer events
          polyfill */
          touch-action="none"
        >
          {pages.map((p,i)=> (
            <img src={p} key={i} alt={`sample book page #${i+1}`}/>
          ))}
        </FlippingPages.default>
      )}
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
        <Link to="/books" className="book-preview-read-more-link" style={{display: selected === totalPages ? 'block' : 'none' }}>Read more!</Link>
      </div>
    </div>
  )
}

export default BookPreview
