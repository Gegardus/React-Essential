import './App.css';
import React, { useReducer } from 'react';

const initialState = {message: "Barev"}

function reducer(state, action) {
  switch(action.type) {
    case 'yell': return {message: `Qez el ${state.message}`};
    case 'whisper': return {message: `Es el ${state.message}um em `};
  }
}

function App() {
  const [number, setNumber] = useReducer((num, newNum) => num + newNum, 0);
  const [checked, toggle] = useReducer(checked => !checked, false);
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <h1 onClick={() => setNumber(1)}>{number}</h1>
      <input type="checkbox" value={checked} onChange={toggle}/>  
      
      {checked ? 'Checked' : 'Unchecked'}

      <p>{state.message}</p>  
      <button onClick={() => dispatch({type: 'yell'})}>Yelling</button>
      <button onClick={() => dispatch({type: 'whisper'})}>Whispering</button>
    </>
  )
}

export default App;