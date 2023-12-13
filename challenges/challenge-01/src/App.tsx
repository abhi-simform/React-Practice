import { useState } from 'react';
import './App.css';

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(step);
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="container">
      <div className="step">
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        {count === 1
          ? `Today is ${date.toDateString()}`
          : `${count} days from today is ${date.toDateString()}`}
      </p>
    </div>
  );
}

export default App;
