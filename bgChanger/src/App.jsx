import { useState } from 'react'
// import './App.css'

function App() {
  const [bg, setbg] = useState('#242424');

  return (
    <>
     <div className="window" style={{backgroundColor:bg}}>
      <div className="options">
        <button onClick={()=>setbg('violet')}   style={{backgroundColor:'violet'}}>Violet</button>
        <button onClick={()=>setbg('indigo')} style={{backgroundColor:'indigo'}}>Indigo</button>
        <button onClick={()=>setbg('blue')} style={{backgroundColor:'blue'}}>Blue</button>
        <button onClick={()=>setbg('green')} style={{backgroundColor:'green'}}>Green</button>
        <button onClick={()=>setbg('yellow')} style={{backgroundColor:'yellow'}}>Yellow</button>
        <button onClick={()=>setbg('orange')} style={{backgroundColor:'orange'}}>Orange</button>
        <button onClick={()=>setbg('red')} style={{backgroundColor:'red'}}>Red</button>
      </div>
     </div>
    </>
  )
}

export default App
