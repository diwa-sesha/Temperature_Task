import React from 'react'
import {useState} from 'react'
import "./App.css"


function App() {
  const[click,setClicks]=useState(10)
  const addClick=()=>{
    setClicks((count=>count+1));
  };
  const subClick=()=>{
    setClicks((count=>count-1));
  };

  const tempClass = click >= 30 ? 'vhot':click>=16?'hot':'cold';
  return (
    <div id='main'>
      <div id='head'>
        <h1>Temperature Control App</h1>
      </div>
      <div id='temp'>
          <div id='button1'>
            <button id={tempClass}>{click}<sup>o</sup>C</button>
          </div>
          <div id='button2'>
            <button onClick={addClick}>+</button>
            <button onClick={subClick}>-</button>
          </div>
      </div>
    </div>
)
}

export default App

        