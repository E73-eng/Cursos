import Header from './components/Header'
import Content from './components/Content'
import Total from './components/Total'
import { useState } from 'react'
import Display from './components/Display'
import Button from './components/Button'


const App = () => {  

  const [ counter, setCounter ] = useState(0)  

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const resetToZero = () => setCounter(0)  

  return (
    
    <div>

      <Display counter={counter}/>
      <Button onClick={increaseByOne} text='plus'/>
      <Button onClick={decreaseByOne} text='minus'/>
      <Button onClick={resetToZero} text='reset'/>      

    </div>      
    
  )
}

export default App
