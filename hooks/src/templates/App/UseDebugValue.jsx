/* eslint-disable */
import { useRef, useEffect, useState, useDebugValue } from 'react';

const useMediaQuery = (queryValue, initialValue = false) => {
  const [match, setMatch] = useState(initialValue)

  useDebugValue(`Query: ${queryValue}`, name => {
    return name + 'modificado'
  })

  useEffect(() => {
    let isMounted = true
    const matchMedia = window.matchMedia(queryValue)

    const handleChange = () => {
      if(!isMounted) return
      setMatch(!!matchMedia.matches)
    }

    matchMedia.addEventListener('change', handleChange)
    setMatch(!!matchMedia.matches)

    return () => {
      isMounted = false
      matchMedia.removeEventListener('change', handleChange)
    }
  },[queryValue])

  return match
}

export const App = () => {
  const small = useMediaQuery('(max-width: 400px)')
  const background = small ? 'green' : null
  console.log("🚀 ~ file: index.jsx:45 ~ App ~ small:", small)
  return <div style={{background}}>oi</div>

};

export default App;

//Esse snippet pode ser colocando no source > snippet do chrome
// (function() {
//   console.clear()
//   const matchMedia = window.matchMedia('(max-width: 500px)')

//   matchMedia.addListener(function() {
//       console.log(matchMedia, window.innerWidth)
//   })
// })()

