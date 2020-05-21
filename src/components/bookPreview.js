import React, { useState, useEffect } from 'react'
import SVG from 'react-inlinesvg'
import PropTypes from 'prop-types'

import { Link } from './link'

import AccessibleFocusOutline from '../util/components/accessibleFocusOutline'

// context
import { usePageContext } from '../context/pageContext'

import iconArrow from '../../static/icons/arrow.svg'

import 'flipping-pages/FlippingPages.css'


const BookPreview = ( { pages } ) => {
  const { langKey } = usePageContext()
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
        <Link to="/books" className="book-preview-read-more-link" style={{display: selected === totalPages ? 'block' : 'none' }}>{t.readmore[langKey]}</Link>
      </div>
    </div>
  )
}

export default BookPreview

BookPreview.propTypes = {
  lang: PropTypes.oneOf(['en','ja'])
}

const t = {
  readmore: {
    en: "Read more!",
    ja: "もっと読む！",
  }
}
