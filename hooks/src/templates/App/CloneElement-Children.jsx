/* eslint-disable */
import { Children, useEffect, useState, useLayoutEffect, cloneElement } from 'react';

const s = {
  style: {
    fontSize: '30px',
  },
};

//atráves do children e do clone element eu consigo injetar por exemplo estilos e passar
//props para todos os components filhos
const Parent = ({children}) => {
  return Children.map(children, (child) => {
    const newChild = cloneElement(child, {...s})
    return newChild
  })
}

export const App = () => {
  return (
    <Parent>
      <p> oi </p>
      <p> oi </p>
    </Parent>
  );
};

export default App;
