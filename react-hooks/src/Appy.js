import './App.css';
import { useState, useEffect } from 'react';

function App() {
    const [winner, setWinner] = useState('Vahan')
    const [admin, setAdmin] = useState(false)
    // Objects, {} in JavaScript do not have the method .map(). It's only for Arrays, []
    const [data, setData] = useState([])
  
    useEffect(() => {
      // document.title = (`Selebrate ${winner}`)
      console.log(`Selebrate ${winner}`);
    }, [winner])
  
    useEffect(() => {
      console.log(
        `The user is: ${admin ? 'admin' : 'not admin'}`
      )   
    }, [admin])
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((res) => setData(res))
    }, [])
    
    if(data) {
    return(
      <section>
        <h1>Our Congragulations to the Winner {winner}</h1>
        <button onClick={() => setWinner('Ani') }>Nominate Winner</button>
        <p>{admin ? 'logged in' : 'not logged in'}</p>
        <button onClick={() => setAdmin(true)}>Take power</button>
       
        <ul>
          {data.map((article) => (
            <li key={article.id}>{article.title}</li>
          ))}
        </ul>
        <button onClick={() => setData([])}>Clean Page</button>
      </section>
    )
    }
  }
  
  export default App;