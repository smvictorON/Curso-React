import './App.css';
import React, { useContext, useState } from 'react';

//aqui é como se fosse um estado inicial
const globalState = {
  title: 'titulo do contexto',
  counter: 0,
  body: 'corpo do context',
};

const GlobalContext = React.createContext();

//eslint-disable-next-line
const Div = () => {
  return (
    <>
      <H1 />
      <P />
    </>
  );
};

//eslint-disable-next-line
const H1 = () => {
  const context = useContext(GlobalContext);
  //destructuting de dois níveis
  const {
    contextState: { title, counter },
  } = context;

  return (
    <h1>
      {title} {counter}
    </h1>
  );
};

//eslint-disable-next-line
const P = () => {
  const context = useContext(GlobalContext);

  const {
    // contextState: { counter },
    // contextState,
    setContextState,
  } = context;

  //podemos fazer assim
  // return <p onClick={() => setContextState({ ...contextState, counter: counter + 1 })}>{context.contextState.body}</p>;
  //ou assim
  return (
    <p onClick={() => setContextState((state) => ({ ...state, counter: state.counter + 1 }))}>
      {context.contextState.body}
    </p>
  );
};

const App = () => {
  //colocando o contexto em um state para que seja possivel alteralo
  //atualizando os componentes que usam ele
  const [contextState, setContextState] = useState(globalState);

  return (
    //esse provider passa o state para os filhos e tbm estamos passando
    //o setState para mudar os dados, muito cuidado pois se atualizar
    //o estado de maneira errada, quebra toda a aplicação
    <GlobalContext.Provider value={{ contextState, setContextState }}>
      <Div />
    </GlobalContext.Provider>
  );
};

export default App;
