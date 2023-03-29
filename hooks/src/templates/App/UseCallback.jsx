import './App.css';
import { useState, memo, useCallback } from 'react';
import proptypes from 'prop-types';

const Button = memo(function Button({ increment }) {
  console.log('filho');
  return (
    <button type="button" onClick={() => increment(10)}>
      +
    </button>
  );
});

Button.propTypes = {
  increment: proptypes.func,
};

const App = () => {
  const [counter, setCounter] = useState(0);

  console.log('pai');
  //usamos o callback aqui e tambem dizemos para o react que é para ele atualizar
  //somente se alguma das varias do array de dependencia [] mudar, mas como estamos
  //pegando o valor do state embutido ele não vai mudar ao re-renderizar o componente
  //para isso tambem usamos o memo no componente filho, para ele ficar memorizado, e
  //como a função não vai ser recriado o componente filho nao precisa ser recriado
  const increment = useCallback((num) => {
    setCounter((c) => c + num);

    //se usassemos assim, teriamos que adicionar o counter nas dependencias e assim
    //toda vez que counter sofrer uma alteração tudo seria recriado
    // setCounter(counter);
  }, []);

  return (
    <div className="App">
      <h1>Contador: {counter}</h1>
      <Button increment={increment}>+</Button>
    </div>
  );
};

export default App;
