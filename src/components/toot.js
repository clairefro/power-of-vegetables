import React from "react"
import { speak } from "../util/speak"
import SVG from "react-inlinesvg"
import iconSpeaker from "../../static/icons/speaker.svg"

const Toot = ({ langCode, langName, text }) => {
  const onClick = () => {
    if (window.speechSynthesis) {
      speak(text, langCode)
    }
  }
  return (
    <div className="toot-x">
      <div className="toot toot-y" onClick={onClick}>
        <div className="toot-text-box">
          <span className="toot-text">{text}</span>
          <span className="toot-lang">{langName}</span>
        </div>
        <SVG src={iconSpeaker} />
      </div>
    </div>
  )
}

export default Toot
