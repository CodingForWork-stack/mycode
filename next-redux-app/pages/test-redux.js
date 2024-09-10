// pages/test-redux.js
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset } from '../src/redux/slices';

export default function TestRedux() {
  const dispatch = useDispatch(); // Get the dispatch function from Redux
  const counter = useSelector((state) => state.counter.value); // Access the current state

  return (
    <div>
      <h1>Test Redux</h1>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

