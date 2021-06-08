import React, { useState } from 'react';
import './App.css';
import Entry from './components/Entry/Entry';
import Comparison from './components/Comparison/Comparison';

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className='App'>
      <header>Pairwise Comparison App</header>
      <div className='container'>
        <Entry items={items} setItems={setItems} />
        <Comparison items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;
