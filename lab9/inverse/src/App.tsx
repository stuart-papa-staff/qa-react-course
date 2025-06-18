import { useState } from 'react'
import './App.css'
import CounterDisplay from './components/CounterDisplay'
import IncrementButton from './components/IncrementButton'
import ResetButton
 from './components/ResetButton'

function App() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount((previous) => previous + 1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <>
      <div>
        <CounterDisplay count={count} />
        <IncrementButton increment={handleIncrement}/>
        <ResetButton reset={handleReset}/>
      </div>
    </>
  )
}

export default App
