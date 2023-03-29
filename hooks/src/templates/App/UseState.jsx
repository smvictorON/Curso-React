import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const App = () => {
  const [reverse, setReverse] = useState(false);
  const [fast, setFast] = useState(false);
  const reverseClass = reverse ? 'reverse' : '';
  const fastClass = fast ? 'fast' : '';

  const handleFast = () => {
    setFast(!fast);
  };

  // usando o valor embutido para atualizar
  // é melhor pq garante que temos o estado
  const handleReverseCB = () => {
    setReverse((reverse) => !reverse);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverseClass} ${fastClass}`} alt="logo" />

        <button type="button" onClick={() => handleReverseCB()}>
          Reverse
        </button>
        <br />
        <button type="button" onClick={() => handleFast()}>
          Fast
        </button>
      </header>
    </div>
  );
};

export default App;
