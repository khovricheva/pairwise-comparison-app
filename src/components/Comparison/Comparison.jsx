import React, { useState, useEffect } from 'react';
import './Comparison.css';

function Comparison({ items, setItems }) {
  const [isActive, setIsActive] = useState(true);
  let pairs = [];

  const createPairs = (items) => {
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        pairs.push([items[i].itemName, items[j].itemName]);
      }
    }
  };

  const selectBest = (id) => {
    const elementsIndex = items.findIndex((item) => item.itemName === id);
    let newArray = [...items];
    newArray[elementsIndex] = {
      ...newArray[elementsIndex],
      score: newArray[elementsIndex].score + 1,
    };
    setItems(newArray);
  };

  createPairs(items);

  return (
    <div>
      <div> {pairs.length}</div>
      {pairs.map((item, i) => (
        <div className='pair' key={i}>
          <button
            id={item[0]}
            onClick={(event) => selectBest(event.target.id)}
            className={`pair-btn ${isActive ? 'active' : ''}`}
          >
            {item[0]}
          </button>
          <button
            id={item[1]}
            onClick={(event) => selectBest(event.target.id)}
            className={`pair-btn ${isActive ? '' : 'active'}`}
          >
            {item[1]}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Comparison;
