import React, { createContext, useContext, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './Appcont';
import { useFetch } from './useFetch';

// implement context without custom hook
// export const TreesContext = createContext();

// implement context with a custom hook useTrees
// const TreesContext = createContext();

// implement context with a custom hook useTrees
// export const useTrees = () => useContext(TreesContext);

// const trees = [
//   {id: 1, type: 'Maple'},
//   {id: 2, type: 'Oak'},
//   {id: 3, type: 'Family'},
//   {id: 4, type: 'Component'}
// ];

function App({login}) {
  const {loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`    
  );
  if(loading) return <h1>Loading...</h1>;
  if(error) return(
    <pre>{JSON.stringify(error, null, 2)}</pre>
  );
  return(
    <div>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <img src={data.avatar_url} alt={data.login} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  // <TreesContext.Provider value={{trees}}>
    <App login="Gegardus"/>
  // </TreesContext.Provider>  
  // </React.StrictMode>
);

