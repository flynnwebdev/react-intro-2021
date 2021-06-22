import React from 'react';
import Greeting from './Greeting';

function App() {
  return (
    <div style={{ textAlign: 'center' }}>
      <header>
        <Greeting />
        <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
