import './App.css';
import { useState } from 'react';
import {FaStar} from 'react-icons/fa'

const createArray = (length) => [
  ...Array(length)
];

function Star({selected = false, onSelect}) {
  return <FaStar color={selected ? 'green' : 'orange'}
    onClick={onSelect}
  />
}

function StarRating({ totalStars = 7 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createArray(totalStars).map((s, i) => (  
        <Star key={i} 
          selected={ selectedStars > i }
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p> Are selected: {selectedStars} of {totalStars}</p>
    </>
  );
}

function App() {
  const [status, setStatus] = useState('Undelivered')
  const [checked, setChecked] = useState(false)

  return (
    <div className="App">
      <button onClick={() => setStatus("Delivered")}>Deliver</button><br/>
        <h1>The package is: {status}</h1>

      <input type="checkbox" value={checked} onChange={() => setChecked((checked) => !checked)}/>  
      <p>{checked ? 'Checked' : 'Unchecked'}</p>

      <StarRating totalStars={11}/>
    </div>
  );
}

export default App;
