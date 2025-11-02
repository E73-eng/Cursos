import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
import { useState } from 'react'


const App = () => {  

  const [ counter, setCounter ] = useState(0)  

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>plus</button>
    </div>
  )
}

export default App
