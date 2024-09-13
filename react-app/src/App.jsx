import { useState } from "react"
function App() {
  
let [counter , setCounter] = useState(10)

const addValue = ()=>{
  setCounter(counter + 1);
}

const removeValue = ()=> {
  setCounter(counter - 1)
}
  return (
    
   <>
  
   <h1>Hello React </h1><h2>Counter Value: {counter}</h2>
   <button onClick={addValue}>addValue</button><br/>
    <br/>
   <button onClick={removeValue}>removeValue</button>
   </>
  )
}

export default App
