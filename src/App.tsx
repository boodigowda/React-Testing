import React from 'react';
import logo from './logo.svg';
import './App.css';
import Application from './components/application/Application';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Application /> */}
      {<Skills skills={['HTML', 'CSS']} />}
    </div>
  );
}

export default App;
