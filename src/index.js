import './index.css'

/*
  Autoplaying audio/video files on various browser

*/

/*
    This works on Chrome, Firefox & Internet Explorer and Safari <= 10 👍

*/

// const audio = new window.Audio()
// audio.src = 'https://raw.githubusercontent.com/vnglst/autoplay-tutorial/master/mp3/winamp.mp3'
// audio.autoplay = true

// Instead of autoplaying you can also use this

// const audio = new window.Audio()
// audio.src = 'https://raw.githubusercontent.com/vnglst/autoplay-tutorial/master/mp3/winamp.mp3'
// audio.play()

/*
    This doens't work on mobile Chrome and Safari however, and not on Safari 11 either! 💩

*/

/*
    Detecting (auto)play capabilities

*/

// ...

/*
    On mobile devices and Safari >= 11 you can initiate playback from a user interaction (e.g. a button).
    This works on every modern browser

*/

// const btn = document.createElement('BUTTON')
// const textLabel = document.createTextNode('Play')
// const audio = new window.Audio()

// btn.appendChild(textLabel)
// document.getElementById('root').appendChild(btn)
// document.getElementById('root').appendChild(audio)

// btn.onclick = (e) => {
//   audio.src = 'https://raw.githubusercontent.com/vnglst/autoplay-tutorial/master/mp3/winamp.mp3'
//   audio.play()
// }

/*
    Call stack, this works too 👍

*/

// const btn = document.createElement('BUTTON')
// const textLabel = document.createTextNode('Play')
// const audio = new window.Audio()
// audio.controls = true

// btn.appendChild(textLabel)
// document.getElementById('root').appendChild(btn)
// document.getElementById('root').appendChild(audio)

// btn.onclick = (e) => {
//   setTimeout(() => {
//     audio.src = 'https://raw.githubusercontent.com/vnglst/autoplay-tutorial/master/mp3/winamp.mp3'
//     audio.play()
//   }, 1000)
// }

/*
    Call stack, using a fake Promise. This works too 👍
    https://jsfiddle.net/vnglst/q4d6eozj/

*/

// const btn = document.createElement('BUTTON')
// const textLabel = document.createTextNode('Play')
// const audio = new window.Audio()
// audio.src =
//   'https://raw.githubusercontent.com/vnglst/autoplay-tutorial/master/mp3/modem-sound.mp3'
// audio.controls = true

// btn.appendChild(textLabel)
// document.getElementById('root').appendChild(btn)
// document.getElementById('root').appendChild(audio)

// const mockedPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const src = 'https://raw.githubusercontent.com/vnglst/autoplay-tutorial/master/mp3/winamp.mp3'
//     return resolve(src)
//   }, 500)
// })

// btn.onclick = (e) => {
//   mockedPromise.then(src => {
//     audio.src = src
//     audio.play()
//   })
// }

/*
    Call stack, but this doesn't work 💩
    https://jsfiddle.net/vnglst/f702pyw1/

*/

// const btn = document.createElement('BUTTON')
// const textLabel = document.createTextNode('Play')
// const audio = new window.Audio()
// audio.src =
//   'https://raw.githubusercontent.com/vnglst/autoplay-tutorial/master/mp3/winamp.mp3'
// audio.controls = true

// btn.appendChild(textLabel)
// document.getElementById('root').appendChild(btn)
// document.getElementById('root').appendChild(audio)

// btn.onclick = e => {
//   window
//     .fetch(
//       `https://api.github.com/repos/vnglst/autoplay-tutorial/contents/mp3/modem-sound.mp3`
//     )
//     .then(resp => resp.json())
//     .then(json => {
//       audio.src = json.download_url
//       audio.play()
//     })
// }

/*
    How to fix this: start playing a different audio source and pause it immediately.
    The set new source and start playback, all fine and good! 🕺

*/

// const btn = document.createElement('BUTTON')
// const textLabel = document.createTextNode('Play')
// const audio = new window.Audio()
// audio.src =
//   'https://raw.githubusercontent.com/vnglst/autoplay-tutorial/master/mp3/winamp.mp3'
// audio.controls = true

// btn.appendChild(textLabel)
// document.getElementById('root').appendChild(btn)
// document.getElementById('root').appendChild(audio)

// btn.onclick = e => {
//   // To fix playback, start and pauze audio with a different source, before initiating request
//   audio.play()
//   audio.pause()
//   window
//     .fetch(
//       `https://api.github.com/repos/vnglst/autoplay-tutorial/contents/mp3/modem-sound.mp3`
//     )
//     .then(resp => resp.json())
//     .then(json => {
//       audio.src = json.download_url
//       audio.play()
//     })
// }

/*
  Setting currentTime for audio/video files works on Chrome/Firefox
  But fails silently on Safari
  And fails horribly on IE11

*/

const btn = document.createElement('BUTTON')
const textLabel = document.createTextNode('Play')
const audio = new window.Audio()
audio.controls = true

btn.appendChild(textLabel)
document.getElementById('root').appendChild(btn)
document.getElementById('root').appendChild(audio)

btn.onclick = (e) => {
  audio.src = 'https://raw.githubusercontent.com/vnglst/autoplay-tutorial/master/mp3/winamp.mp3'
  audio.currentTime = 3.50 // llama's ass
  audio.play().then(() => { console.log('succes') }).catch(e => { console.log(e) })
}

audio.addEventListener('timeupdate', (e) => {
  console.log(audio.currentTime)
})
