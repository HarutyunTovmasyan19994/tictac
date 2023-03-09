import React, { useState } from 'react';
import './App.css'

function App() {
const [state,setState] = useState(Array(9).fill(null))
const[boolean,setBoolean] = useState(true)
console.log(state,"state");
const tictacOnclick =(index)=>{
  const squrest = [...state]
  squrest[index] = boolean ? 'X' : "O"
  setState(squrest)
  setBoolean(!boolean)
  console.log(index)
}
const winnerHandle =()=>{
  const winner = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(let winn of winner){
    const[a,b,c] = winn
    if(state[a]===state[b] && state[a] === state[c]){
      return state[a]
    }
  }
  return false
}
const handleReset =()=>{
  setState(Array(9).fill(null))
}
const isWinn = winnerHandle()
  return (
    <div className="App">
      {isWinn ? (<>{isWinn} won the game<button style={{color:"#111"}} onClick={handleReset}>Resest Play</button></>):(<>
      <div className='tictac'>
        <div className='tictac1'>
          <div className='tictak2' onClick={()=>tictacOnclick(0)}>
            <span>
              {state[0]}
            </span>
          </div>
          <div className='tictak2' onClick={()=>tictacOnclick(1)}>
          <span>
          {state[1]}
          </span>
          </div>
          <div className='tictak2' onClick={()=>tictacOnclick(2)}>
          <span>
          {state[2]}
          </span>
          </div>
        </div>
        <div className='tictac1'>
        <div className='tictak2' onClick={()=>tictacOnclick(3)}>
        <span>
        {state[3]}
        </span>
        </div>
          <div className='tictak2' onClick={()=>tictacOnclick(4)}>
          <span>
          {state[4]}
          </span>
          </div>
          <div className='tictak2' onClick={()=>tictacOnclick(5)}>
          <span>
          {state[5]}
          </span>
          </div>
        </div>
        <div className='tictac1'>
        <div className='tictak2' onClick={()=>tictacOnclick(6)}>
        <span>
        {state[6]}
        </span>
        </div>
          <div className='tictak2' onClick={()=>tictacOnclick(7)}>
          <span>
          {state[7]}
          </span>
          </div>
          <div className='tictak2' onClick={()=>tictacOnclick(8)}>
          <span>
          {state[8]}
          </span>
            </div>      
            </div>
      </div>
      
      </>)}
      
    </div>
  );
}

export default App;
