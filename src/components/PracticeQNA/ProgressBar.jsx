import React from 'react'
import { useState } from 'react';



const  ProgressBar = () => {


  let [counter, setCounter] = useState(15)

const addValue = () =>{
  if (counter <20) {
    console.log("Counter::", counter)
 
     setCounter(prev => prev +1);
}
  }
  
const decValue = () => {

  if (counter >0) {
     counter = counter -1 ;
  setCounter(prev => prev -1);
  }
 
}



  return (
    <>
    <h1>Counter Value : {counter}</h1>
   
    <button  onClick = {addValue} >Add value</button>
    <br />
    <button onClick = {decValue}>Decrease Value</button>
    </>
    
  )
}
 
export default  ProgressBar



