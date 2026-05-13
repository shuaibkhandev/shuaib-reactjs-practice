import React, { useState } from 'react'

const State = () => {
  const [count , setCount] = useState(0);
  // let value = 0;
  const handleIncreament = () => {
    // value++;
    // console.log(value);
    setCount(()=>count+1)
  }
  return (
    <div>
      <h3>value : {count}</h3>
      <button onClick={handleIncreament}>Increament</button>
    </div>
  )
}

export default State
