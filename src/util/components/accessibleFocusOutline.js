// makes child component's :active state outline invisible unless accessed by tab

// inspired by Sahar Bala
// https://www.eventbrite.com/engineering/how-to-fix-the-ugly-focus-ring-and-not-break-accessibility-in-react/

import React, { useState, useEffect } from 'react'

const AccessibleFocusOutline = ({ children }) => {
  const [outlineEnabled, setOutlineEnabled] = useState(false)

  useEffect(() => {
    window.addEventListener('keyup', handleKeyup)
    return () => window.removeEventListener('keyup', handleKeyup)
  },[])

  useEffect(() => {
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  },[])

  const handleKeyup = (e) => {
    const isTabEvent = e.keyCode === 9 || e.keyCode === 13
    if (isTabEvent) {
      setOutlineEnabled(true)
    }
  }

  const handleClick = (e) => {
    setOutlineEnabled(false)
  }

  return (
    <span className={ outlineEnabled ? '' : 'no-outline-on-focus' }>
      {children}
    </span>
  )
}

export default AccessibleFocusOutline
