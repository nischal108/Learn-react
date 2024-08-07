import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import countState,{evenSelector} from './store/atoms/countAtom'; 

function App() {
  return (
    <>
      <CountDisplay />
      <CountControls />
      <Even/>
    </>
  );
}

function CountDisplay() {
  console.log("Rendering CountDisplay");
  const count = useRecoilValue(countState);
  return (
    <div>
      <h2>Count: {count}</h2>
    </div>
  );
}

function CountControls() {
  console.log("Rendering CountControls");
  const setCount = useSetRecoilState(countState);


  return (
    <div>
      <button onClick={() => {setCount((prevCount) => prevCount + 1)}}>Increment</button>
      <button onClick={() => {setCount((prevCount) => prevCount - 1)}}>Decrement</button>
    </div>
  );
}

function Even (){
  const even = useRecoilValue(evenSelector);
  console.log("even wala");
  return (!even ? <div> even raixa</div> :"");
}

export default App;
