import { SetStateAction, useState } from 'react';
import './App.css';

interface InputType extends React.ComponentPropsWithRef<'input'> {
  label: string;
  value: number;
  setValue: React.Dispatch<SetStateAction<number>>;
}

function Input(props: InputType) {
  const { label, id, value, setValue, ...rest } = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        defaultValue={value}
        onChange={(e) => setValue(Number(e.target.value))}
        {...rest}
      />
    </div>
  );
}

interface SelectType extends React.ComponentPropsWithRef<'select'> {
  label: string;
  value: number;
  setValue: React.Dispatch<SetStateAction<number>>;
}

function Select(props: SelectType) {
  const { label, value, setValue, id, ...rest } = props;
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <select
        name={id}
        id={id}
        defaultValue={value}
        onChange={(e) => setValue(Number(e.target.value))}
        {...rest}
      >
        <option value="0">It was bad 0%</option>
        <option value="10">It was good 10%</option>
        <option value="20">It was amazing 20%</option>
      </select>
    </div>
  );
}

interface ResetType {
  resetForm: () => void;
}

function Reset(props: ResetType) {
  const { resetForm } = props;
  return (
    <button type="reset" onClick={resetForm}>
      reset
    </button>
  );
}

function App() {
  const [billAmount, setBillAmount] = useState(400);
  const [mySatisfaction, setMySatisfaction] = useState(10);
  const [friendSatisfaction, setFriendSatisfaction] = useState(10);
  const averageSatisfaction = (mySatisfaction + friendSatisfaction) / 2;
  const tipValue = Math.round((averageSatisfaction * billAmount) / 100);
  const totalPay = billAmount + tipValue;
  function resetForm() {
    setBillAmount(0);
    setMySatisfaction(0);
    setFriendSatisfaction(0);
  }
  return (
    <form>
      <Input
        label="How much was the bill? : "
        id="billAmount"
        value={billAmount}
        setValue={setBillAmount}
      />
      <Select
        label="How did you like the service? : "
        id="mySatisfaction"
        value={mySatisfaction}
        setValue={setMySatisfaction}
      />
      <Select
        label="How did your friend like the service? : "
        id="friendSatisfaction"
        value={friendSatisfaction}
        setValue={setFriendSatisfaction}
      />
      <h2>
        You pay ${totalPay} (${billAmount} + ${tipValue})
      </h2>
      <Reset resetForm={resetForm} />
    </form>
  );
}

export default App;
