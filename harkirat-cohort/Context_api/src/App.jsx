import React, { useContext, useState } from 'react';
import { ValueContext } from './ValueContext';

function App() {
  const [value, setValue] = useState(1);
  return (
    <div>
      <ValueContext.Provider value={{ value, setValue }}>
        <FirstChild />
      </ValueContext.Provider>
    </div>
  );
}

function FirstChild() {
  return (
    <div>
      <SecondChild />
      <Incrementer />
    </div>
  );
}

function SecondChild() {
  const { value } = useContext(ValueContext); 
  return (
    <div>
      {value}
    </div>
  );
}

function Incrementer() {
  const { setValue } = useContext(ValueContext); 
  return (
    <button onClick={() => setValue(prev => prev + 1)}>click me !!</button>
  );
}

export default App;