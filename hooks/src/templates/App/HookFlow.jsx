/* eslint-disable */
import { useRef, useEffect, useState, useLayoutEffect } from 'react';

const ReactHooks = () => {
  console.log('%c CHILD RENDER STARTING...','color: green')

  //Lazy Initializer #1
  const [state1, setState1] = useState(() => {
    const state = new Date().toLocaleDateString()
    console.log('%c State Lazy Initializer - (useState + InitialValue) = ' + state,'color: green')
    return state
  })
  const renders = useRef(0)

  useEffect(() => {
    console.log('%c useEffect => Empty dependencies','color: yellow')

    return () => {
      console.log('%c useEffect (cleanup) => Empty dependencies','color: yellow')
    }
  },[])

  useEffect(() => {
    console.log('%c useEffect => No dependencies','color: yellow')
    renders.current += 1

    return () => {
      console.log('%c useEffect (cleanup) => No dependencies','color: yellow')
    }
  },)

  useLayoutEffect(() => {
    console.log('%c useEffect','color: red')

    return () => {
      console.log('%c useEffect (cleanup)','color: red')
    }
  })

  useEffect(() => {
    console.log('%c useEffect (UPDATE state1) ' + state1,'color: yellow')
  },[state1])

  console.log('%c CHILD RENDER ' + renders.current + ' ENDING...', 'color: green')
  return(
    <div onClick={() => setState1(new Date().toLocaleString('pt-br'))} style={{fontSize: '60px'}}>
      State: {state1}
    </div>
  )
}

export const App = () => {
  const renders = useRef(0)

  useEffect(() => {
    renders.current += 1
  })

  console.log(`%cPARENT RENDER ${renders.current} STARTING...`,'color: green');
  const [show, setShow] = useState(false)
  console.log(`%cSTATE INITIALIZER - (useState + InitialValue) = ` + show,'color: green');
  console.log(`%cPARENT RENDER ${renders.current} ENDING...`,'color: green');

  return(
    <div>
      <p style={{fontSize: '60px'}} onClick={() => setShow(s => !s)}>
        Show Hooks
      </p>
      {show && <ReactHooks></ReactHooks>}
    </div>
  )
};

export default App;
