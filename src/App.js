import React from 'react';
import './App.css';
import ClickCounter from './components/ClickCounter';
import MouseOverCounter from './components/MouseOverCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Implementing HOC</h1>
        <ClickCounter />
        <MouseOverCounter />
      </header>
    </div>
  );
}

export default App;
