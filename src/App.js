import React, { useState } from 'react';
import Entry from './components/Entry/Entry';
import Comparison from './components/Comparison/Comparison';
import './App.scss';

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className='App'>
      <header className='header'>Pairwise Comparison App</header>
      <div className='container'>
        <Entry items={items} setItems={setItems} />
        <Comparison items={items} setItems={setItems} />
      </div>
    </div>
  );
}

export default App;
