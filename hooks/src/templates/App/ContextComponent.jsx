/* eslint-disable */
import { useState, createContext, useContext } from 'react';

const s = {
  style: {
    fontSize: '30px',
  },
};

const TurnOnOffContext = createContext();

const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const onTurn = () => {
    setIsOn((c) => !c);
  };

  return <TurnOnOffContext.Provider value={{ isOn, onTurn }}>{children}</TurnOnOffContext.Provider>;
};

const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return isOn ? children : null;
};

const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);
  return !isOn ? children : null;
};

const TurnButton = ({ ...props }) => {
  const { isOn, onTurn } = useContext(TurnOnOffContext);
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
      <div>
        <p>teste</p>
        <TurnedOn>
          <P>Coisas que vão acontecer ON</P>
        </TurnedOn>
        <TurnedOff>
          <P>Coisas que vão acontecer OFF</P>
        </TurnedOff>

        <TurnButton {...s}></TurnButton>
      </div>
    </TurnOnOff>
  );
};

export default App;
