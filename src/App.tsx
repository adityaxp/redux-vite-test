import {useState} from 'react'

import './App.css'
import {useDispatch, useSelector} from 'react-redux'
import {AppDispatch, RootState} from './state/store'
import {
  decrement,
  increment,
  incrementAsync,
  incrementByAmount
} from './state/counter/counterSlice'

function App() {
  //const [count, setCount] = useState(0)
  const countRedux = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <h2>{countRedux}</h2>
      <div>
        <button onClick={() => dispatch(incrementAsync(10))}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </>
  )
}

export default App
