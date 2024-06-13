import React, { useState } from 'react';

function LoveCalc() {
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [result, setResult] = useState(null);

  const calculateLove = () => {
    if (name1 && name2) {
      const loveScore = Math.floor(Math.random() * 100) + 1;
      setResult(`${name1} and ${name2} have a love score of ${loveScore}%`);
    } else {
      setResult('Please enter both names.');
    }
  };

  return (
    <div className='love-calc'>
      <h1>LOVE CALCULATOR</h1>
      <div className='input-group'>
        <input
          type='text'
          placeholder="Your Name"
          value={name1}
          onChange={(e) => setName1(e.target.value)}
        />
        <input
          type='text'
          placeholder="Partner's Name"
          value={name2}
          onChange={(e) => setName2(e.target.value)}
        />
      </div>
      <button onClick={calculateLove}>Calculate Love</button>
      {result && <p className='result'>{result}</p>}
    </div>
  );
}

export default LoveCalc;
