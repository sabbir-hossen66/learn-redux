import React, { use } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counterSlice';

function App() {
const {count}=useSelector((state)=> state.counter);
const dispatch=useDispatch();
  return (
    <>
      <div>
        <button onClick={()=>dispatch(increment())} className='px-3 cursor-pointer'>Increment</button>
        <h2>{ count}</h2>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
   </div>
    </>
  )
}

export default App
