/* eslint-disable */
import { Children, useState, cloneElement } from 'react';

const s = {
  style: {
    fontSize: '30px',
  },
};

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const onTurn = () => {
    setIsOn((c) => !c);
  };

  return Children.map(children, (child) => {
    //podemos previnir de ter alguma child jsx dessa forma
    if (typeof child.type === 'string') return child;

    const newChild = cloneElement(child, {
      isOn,
      onTurn,
    });
    return newChild;
  });
};

const TurnedOn = ({ isOn, children }) => (isOn ? children : null);
const TurnedOff = ({ isOn, children }) => (!isOn ? children : null);

const TurnButton = ({ isOn, onTurn, ...props }) => {
  return (
    <button {...props} onClick={() => onTurn(!isOn)}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};

const P = ({ children }) => <p {...s}>{children}</p>;

export const App = () => {
  return (
    <TurnOnOff>
      {/* se adicionarmos um elemento nao esperado(Ex: div) como child, */}
      {/* no componente pai isso causa erro */}
      {/* porém pode ser previnido checanco o type da child */}
      <div></div>
      <TurnedOn>
        <P>Coisas que vão acontecer ON</P>
      </TurnedOn>
      <TurnedOff>
        <P>Coisas que vão acontecer OFF</P>
      </TurnedOff>

      <TurnButton {...s}></TurnButton>
    </TurnOnOff>
  );
};

export default App;
