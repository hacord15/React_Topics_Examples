import React , {useState} from 'react'

const RealTimeChange = () => {
    const[input,setInput] =useState('');
  return (
    <div>
        <input type="text" onChange={(e)=>setInput(e.target.value)} />
        <p>User input:{input}</p>
      
    </div>
  )
}

export default RealTimeChange


// onChange={(e) => setInput(e.target.value)}:

// onChange is a React event handler that listens for any changes in the input field (i.e., when the user types or modifies the text).
// When a change occurs, the function (e) => setInput(e.target.value) is executed.
// e is the event object (specifically, an onChange event object).
// e.target refers to the input element that triggered the event.
// e.target.value is the current value of the input field, meaning the text that the user typed.
// setInput(e.target.value):

// This function call updates the state (presumably input) with the new value from the input field.
// setInput is most likely a state updater function returned by the useState hook in React, which is used to manage the component's local state.