import React, { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^*()_+}{|:><,./';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);


  useEffect(()=>{
    generatePassword();
  },[length, numberAllowed, charAllowed])

  const copytoClipboard =  useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  },[password])


  const passwordRef = useRef(null);
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-center text-3xl font-bold mb-6">Password Generator</h1>
      <div className="password-box w-96 bg-gray-200 mx-auto rounded-md shadow-md p-6">
        <div className="password-area relative mb-6">
          <input
            type="text"
            id="password"
            className="w-full rounded-md outline-none px-4 py-2 text-lg font-mono"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button onClick={()=> copytoClipboard()} className=" h-full absolute top-0 right-0 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-800">Copy</button>
        </div>
        <div className="dependencies">
          <label htmlFor="length" className="block mb-2">Password Length: {length}</label>
          <input
            type="range"
            id="length"
            min="8"
            max="20"
            value={length}
            onChange={(e) => setLength(parseInt(e.target.value))}
            className="w-full mb-4"
          />
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="numbers"
              checked={numberAllowed}
              onChange={() => setNumberAllowed(!numberAllowed)}
              className="mr-2"
            />
            <label htmlFor="numbers">Include Numbers</label>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="char"
              checked={charAllowed}
              onChange={() => setCharAllowed(!charAllowed)}
              className="mr-2"
            />
            <label htmlFor="char">Include Special Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
