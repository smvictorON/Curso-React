import './App.css';
import React, { useEffect, useState, useRef } from 'react';

const useCustomHook = (cb, delay = 1000) => {
  const savedCb = useRef();

  //aqui salvado a função passada em uma referencia
  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  //aqui ele executa o cb atual e limpa o internval ao desmontar
  useEffect(() => {
    const interval = setInterval(() => {
      savedCb.current();
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);
};

const App = () => {
  const [delay, setDelay] = useState(1000);
  const [counter, setCounter] = useState(0);
  const [incrementor, setIncrementor] = useState(100);

  //aqui passamos uma função e um delay
  //toda vez que algum mudar ele chama o hook
  useCustomHook(() => setCounter((c) => c + 1), delay);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <h1>Delay: {delay}</h1>
      <button onClick={() => setDelay((d) => d - incrementor)}>-{incrementor}</button>
      <button onClick={() => setDelay((d) => d + incrementor)}>+{incrementor}</button>
      <br />
      <input type="number" value={incrementor} onChange={(e) => setIncrementor(Number(e.target.value))}></input>
    </div>
  );
};

export default App;
