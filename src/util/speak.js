export const speak = (text, lang) => {
  let u = new SpeechSynthesisUtterance(text)
  u.lang = lang
  window.speechSynthesis.speak(u)
}
