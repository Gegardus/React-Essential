import React, { useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './Appie';

function App() {
  const [sound, setSound] = useState("");
  const [color, setColor] = useState("#000000");
  // const sound = useRef();
  // const color = useRef();

  const submit = (e) => {
    e.preventDefault();
    // const soundValue = sound.current.value;
    // const colorValue = color.current.value;
    // alert(`${soundValue} sounds like ${colorValue}`)
    alert(`${sound} sounds like ${color}`)
    // sound.current.value = "";
    // color.current.value = "";
    setSound("");
    setColor("#000000")
  }
  
  return (
    <form onSubmit={submit}>      
      <input 
        // ref={sound} 
        value={sound} 
        type="text" 
        placeholder='Sound...'
        onChange={(e) => setSound(e.target.value)}
        /><br />  
      <input 
        // ref={color} 
        value={color} 
        type="color"
        onChange={(e) => setColor(e.target.value)}
        /><br />
      <button>ADD</button>     
    </form>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

