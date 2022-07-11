import { useEffect, useState } from 'react';
import FlipCard from 'react-countdown-flip-card';

import './App.css';

function App() {
  const [digit, setDigit] = useState<number>(9)

  useEffect(() => {
    setTimeout(() => setDigit(digit === 0 ? 9 : digit-1), 1000)
  }, [digit])

  return (
    <div className='container'>
      <h1>React Countdown Flip Card</h1>
      <FlipCard digit={String(digit)} width={60} height={80} />
    </div>
  );
}

export default App;
