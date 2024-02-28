import { useState } from 'react'
import './App.css'
import Card from './component/Card'


function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='App'>
        <h1>Auto preferido</h1>
       
      <Card />
      </div>

      
    
  )
}

export default App
