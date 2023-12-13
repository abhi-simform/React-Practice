import { useState } from 'react';
import './App.css';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑'
];

function App() {
  const [step, setStep] = useState<number>(1);
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? 'active' : ''.trim()}>1</div>
            <div className={step >= 2 ? 'active' : ''.trim()}>2</div>
            <div className={step >= 3 ? 'active' : ''.trim()}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              className=""
              style={{ backgroundColor: '#7950f2', color: '#ffffff' }}
              onClick={() => setStep((s) => s - 1)}
              disabled={step <= 1}
            >
              Previous
            </button>
            <button
              className=""
              style={{ backgroundColor: '#7950f2', color: '#ffffff' }}
              onClick={() => setStep((s) => s + 1)}
              disabled={step >= 3}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
