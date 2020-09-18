import React from 'react';
import './App.css';
import Header from './component/Header'
import Home from './component/Home'

function App() {
  return (
    <div className="app">
      {/* Header Component */}
      < Header />
      {/* Home Component */}
      < Home />
    </div>
  );
}

export default App;
