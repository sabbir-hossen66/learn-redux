
import { decrement, increment, incrementByValue } from './redux/features/counterSlice';
import { useAppDispatch, useAppSelector } from './redux/hook';

function App() {
const {count}=useAppSelector((state)=> state.counter);
const dispatch=useAppDispatch();
  return (
    <>
      <div>
        <button onClick={()=>dispatch(increment())} className='px-3 cursor-pointer'>Increment</button>
        <h2>{ count}</h2>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(incrementByValue(5))}>incrementBy 5</button>
   </div>
    </>
  )
}

export default App
