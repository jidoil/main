import logo from './logo.svg';
import './App.css';
import Car from './Car';
import React from 'react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}


ReactDOM.reer(
  <React.StrictMode>
    <Car />
  </React.StrictMode>,
  document.getElementById('root')
);

export default App;


