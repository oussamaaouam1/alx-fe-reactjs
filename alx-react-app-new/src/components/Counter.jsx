import { useState } from "react";

export default function Counter(){
  const [count , setCount] = useState(0);
  return(
    <div>
      <p>Current Coun: {count}</p>
      <button onClick={()=> setCount(count + 1)}>Increament</button>
      <button onClick={()=> setCount(count - 1)}>Decreament</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </div>
  )
}