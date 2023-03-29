/* eslint-disable */
import { useRef, useEffect, useState, useLayoutEffect } from 'react';

export const App = () => {
  const [counted, setCounted] = useState([0,1,2,3,4,5,6,7,8,9])
  const divRef = useRef()

  const handleClick = () => {
    setCounted(c => [...c, +c.slice(-1) + 1])
  }

  //primeiro ele atualiza o dom dps faz o scroll
  useEffect(() => {
    const now = Date.now()
    while(Date.now() < now + 1500)
    divRef.current.scrollTop = divRef.current.scrollHeight
  })

  //atualiza o dom e faz o scroll junto
  // useLayoutEffect(() => {
  //   const now = Date.now()
  //   while(Date.now() < now + 1500)
  //   divRef.current.scrollTop = divRef.current.scrollHeight
  // })

  return <>
    <button onClick={() => handleClick()}>Count: {counted.slice(-1)}</button>
      <div style={{height: '300px', overflowY: 'scroll'}} ref={divRef}>
        {counted.map(c => {
          return <p key={`c-${c}`}>{c}</p>
        })}
      </div>
  </>;
};

export default App;
