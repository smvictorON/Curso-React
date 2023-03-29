import './App.css';
import React, { createContext, useContext, useReducer, useRef } from 'react';
import proptypes from 'prop-types';

//actions.js
export const actions = {
  CHANGE_TITLE: 'CHANGE_TITLE',
};

//data.js
export const globalState = {
  title: 'titulo do contexto',
  counter: 0,
  body: 'corpo do context',
};

//reducer.js
export const reducer = (state, action) => {
  switch (action.type) {
    case actions.CHANGE_TITLE:
      return { ...state, title: action.payload };
  }
  return { ...state };
};

//AppContext.jsx
export const Context = createContext();
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);

  //uma forma melhor de passar o dispatch é encapsulando ele em uma função, isso faz
  //com que a pessoa que vai pegar o dispatch do outro lado nao precise saber os
  //types que precisam ser passados
  const changeTitle = (payload) => {
    dispatch({ type: actions.CHANGE_TITLE, payload });
  };

  return <Context.Provider value={{ state, changeTitle }}>{children}</Context.Provider>;
};

AppContext.propTypes = {
  children: proptypes.node,
};

//H1/index.jsx
export const H1 = () => {
  const context = useContext(Context);
  const inputRef = useRef();

  return (
    <>
      <h1 onClick={() => context.changeTitle(inputRef.current.value)}>{context.state.title}</h1>
      <input type="text" ref={inputRef}></input>
    </>
  );
};

const App = () => {
  return (
    <AppContext>
      <div>
        <H1></H1>
      </div>
    </AppContext>
  );
};

export default App;
