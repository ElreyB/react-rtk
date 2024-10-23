import { useDispatch, useSelector } from "react-redux";
import {
  incrementCount,
  resetCount,
  decrementCount,
  incrementByAmount,
} from "./features/count/countSlice";
import { RootState } from "./store";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [amount, setAmoumt] = useState(0);
  const count = useSelector((state: RootState) => state.count.value);
  const incrementBy = useSelector(
    (state: RootState) => state.count.incrementBy
  );
  const dispatch = useDispatch();

  useEffect(() => {
    setAmoumt(incrementBy);
  }, [incrementBy]);

  const handleIncrement = () => dispatch(incrementCount());
  const handleDecrement = () => dispatch(decrementCount());
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount({ value: amount, incrementBy }));
  };
  const handleReset = () => dispatch(resetCount());

  return (
    <>
      <h1>Count: {count}</h1>
      <div className="card">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <div className="card">
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmoumt(+e.target.value)}
          />
          <button type="button" onClick={handleIncrementByAmount}>
            Submit amount
          </button>
        </div>
        <button onClick={handleReset}>Reset </button>
      </div>
    </>
  );
}

export default App;
