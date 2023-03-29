import './App.css';
import React, { useReducer } from 'react';

const globalState = {
  title: 'titulo do contexto',
  counter: 0,
  body: 'corpo do context',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'alterar':
      console.log(action.payload);
      return { ...state, title: 'alterou' };
    case 'inverter':
      return { ...state, title: state.title.split('').reverse().join('') };
  }

  return { ...state };
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, globalState);
  const { title, counter } = state;

  return (
    <div>
      <h1>
        {title} {counter}
      </h1>
      <button onClick={() => dispatch({ type: 'alterar', payload: new Date().toLocaleString() })}>Alterar</button>
      <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
      <button onClick={() => dispatch({ type: 'semaction' })}>Sem Action</button>
    </div>
  );
};

export default App;
