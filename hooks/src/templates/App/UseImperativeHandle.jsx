/* eslint-disable */
import { useRef, useEffect, useState, forwardRef, useImperativeHandle } from 'react';

// consufo esse hook, professor nao soube explicar legal

const DisplayCounted = forwardRef(function DisplayCounted({ counted }, ref) {
  const [random, setRandom] = useState(0.12);
  const refDiv = useRef();

  const handleRandom = () => {
    setRandom(Math.random().toFixed(2));
  };

  useImperativeHandle(ref, () => ({
    handleRandom,
    refDiv: refDiv.current,
  }));

  return (
    <div style={{ height: '300px', overflowY: 'scroll' }} ref={refDiv}>
      {counted.map((c) => {
        return (
          <p onClick={handleRandom} key={`c-${c}`}>
            {c} + {random}
          </p>
        );
      })}
    </div>
  );
});

export const App = () => {
  const [counted, setCounted] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const divRef = useRef();

  const handleClick = () => {
    setCounted((c) => [...c, +c.slice(-1) + 1]);
  };

  useEffect(() => {
    console.log(divRef.current);
    divRef.current.refDiv.scrollTop = divRef.current.refDiv.scrollHeight;
    divRef.current.handleRandom();
  });

  return (
    <>
      <button onClick={() => handleClick()}>Count: {counted.slice(-1)}</button>
      <DisplayCounted counted={counted} ref={divRef}></DisplayCounted>
    </>
  );
};

export default App;
