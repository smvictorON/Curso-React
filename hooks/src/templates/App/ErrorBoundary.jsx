/* eslint-disable */
import React, { useRef, useEffect, useState, useLayoutEffect } from 'react';

const s = {
  style: {
    fontSize: '30px',
  },
};

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  //aconselhado logar o erro em algum lugar
  componentDidCatch(error, errorInfo) {
    // console.log(error, errorInfo)
  }
  render() {
    if (this.state.hasError) return <h1>Algo deu errado</h1>;
    return this.props.children;
  }
}

class ErrorBoundary2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  //aconselhado logar o erro em algum lugar
  componentDidCatch(error, errorInfo) {
    // console.log(error, errorInfo)
  }
  render() {
    if (this.state.hasError) return <h1>Deu ruim</h1>;
    return this.props.children;
  }
}

const ItWillThrowError = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter > 3) throw new Error('que chato');
  }, [counter]);

  return (
    <div>
      <button onClick={() => setCounter((c) => c + 1)}>Click to Increase {counter}</button>
    </div>
  );
};

export const App = () => {
  return (
    <div {...s}>
      <ErrorBoundary>
        <ItWillThrowError></ItWillThrowError>
      </ErrorBoundary>
      <ItWillThrowError></ItWillThrowError>
      <ErrorBoundary2>
        <ItWillThrowError></ItWillThrowError>
      </ErrorBoundary2>
    </div>
  );
};

export default App;
