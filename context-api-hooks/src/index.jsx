import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterContextProvider } from './contexts/CounterContext';
import './index.css';
import Home from './templates/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //stricmode identifica possíveis erros com os lyfecicles, para isso ele
  //executa o render 2x quando a página da reload!
  // <React.StrictMode>
  <CounterContextProvider>
    <Home />
  </CounterContextProvider>,
  // </React.StrictMode>,
);
