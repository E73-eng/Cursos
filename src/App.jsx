import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
import { useState } from 'react'


const App = () => {  

  const [ counter, setCounter ] = useState(0)  

  const increaseByOne = () => setCounter(counter + 1)
  const resetToZero = () => setCounter(0)  

  return (
    <div>
      <div>{counter}</div>

      <button onClick={increaseByOne}>plus</button>
      <button onClick={resetToZero}>reset</button>

    </div>
  )
}

export default App
