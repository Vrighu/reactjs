import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
    <h1>Counter</h1>
    <h1>{count}</h1>

    <button style={{marginRight:1+'rem'}} onClick={()=>{
      if(count<20)setCount(count+1);
      
    }}>Increase value</button>
    <button onClick={()=>{
      if(count>0)
      setCount(count-1)
    }}>Decrease value</button>
    
    </>
  )
}

export default App
