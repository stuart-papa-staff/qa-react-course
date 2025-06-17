import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [temperature, setTemperature] = useState(20);
  const [count, setCount] = useState(1);

  const increaseTemperature = () => {
    setTemperature(temperature + 1);
  }

  const decreaseTemperature = () => {
    setTemperature(temperature - 1);
  }

  const double = () => {
    setCount(count * 2);
  }

  return (
    <>
      <div>
        <h1>React Thermostat</h1>
        <h2>{temperature} °C</h2>
        <button onClick={increaseTemperature}>+</button>
        <button onClick={decreaseTemperature}>-</button>
      </div>
      <div>
        <h1>Powers of 2</h1>
        <h2>{count.toLocaleString()}</h2>
        <button onClick={double}>X2</button>
      </div>
    </>
  )
}

export default App
