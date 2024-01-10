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
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
        <span>Step: </span>
        <input
          type="range"
          id="step"
          name="step"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="number"
          name="count"
          id="count"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <p>
        {count === 0
          ? `Today is ${date.toDateString()}`
          : `${count} days from today is ${date.toDateString()}`}
      </p>
      <button
        onClick={() => {
          setCount(0);
          setStep(1);
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
