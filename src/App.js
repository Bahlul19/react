import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './components/Hello.js'
import Testing from './components/Testing.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Hello></Hello>
      <Testing></Testing>
      </header>
    </div>
  );
}

export default App;
