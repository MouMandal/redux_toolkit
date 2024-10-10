
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { decrement, increment,reset,incrementByAmount } from './features/counter/counterSlice';
import { useState } from 'react';


function App() {

  const [Amount,setAmount]=useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();


  function handleIncrement() {
    dispatch(increment());
  }
  function handleDecrement() {
    dispatch(decrement());
  }
  function handleReset() {
    dispatch(reset());
  }
  function incrementAmount(){
    dispatch(incrementByAmount(Amount))
  }

  return (
    <>

      <button onClick={handleIncrement}>+</button>
      <h3>Count:{count}</h3>
      <button onClick={handleDecrement}>-</button>
      <br />
      <br />
      <button onClick={handleReset}>Reset</button>
      <br />
      <br />
      <input type="Number"  placeholder='Enter the number' value={Amount} onChange={(e)=>setAmount(e.target.value)}/>
      <br />
      <br />
      <button onClick={incrementAmount}>Increment Amount</button>
      
    </>
  )
}

export default App
