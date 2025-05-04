// src/App.js
import React from 'react';
import './App.css';  // Optional: If you have global styles in App.css
import Home from './components/Home';  // Importing Home component
import About from './components/About';  // Importing About component

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bus Tracking System</h1>
      </header>
      
      <div className="content">
        {/* Use the Home component */}
        <Home />

        {/* Use the About component */}
        <About />
      </div>
    </div>
  );
}

export default App;
