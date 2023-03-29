import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './templates/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //stricmode identifica possíveis erros com os lyfecicles, para isso ele
  //executa o render 2x quando a página da reload!
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
);
