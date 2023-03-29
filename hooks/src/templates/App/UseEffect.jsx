import './App.css';
import { useState, useEffect } from 'react';

const clickfn = () => {
  console.log('h1 clicado');
};

const App = () => {
  const [counter, setCounter] = useState(0);

  //DidUpdate
  // useEffect(() => {
  //   console.log('DidUpdate');
  // });

  //DidMount
  // useEffect(() => {
  //   console.log('DidMount');
  // }, []);

  useEffect(() => {
    //nesse caso toda vez que alteramos algo na pagina ele vai executar o
    //comando e adicionar addEventListener, ficando com varios listeners
    document.querySelector('h1')?.addEventListener('click', clickfn);

    //para corrigir esse problema basta remover o addEventListener quando
    //o componente for desmontado
    //WillUnmount
    return () => {
      document.querySelector('h1')?.removeEventListener('click', clickfn);
    };
  }, []);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        +
      </button>
    </div>
  );
};

export default App;
