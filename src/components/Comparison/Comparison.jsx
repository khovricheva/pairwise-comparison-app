import React, { useState, useEffect } from 'react';
import './Comparison.css';

function Comparison({ items, setItems }) {
  const pairs = [];

  const createPairs = (items) => {
    for (let i = 0; i < items.length; i++) {
      for (let j = i + 1; j < items.length; j++) {
        pairs.push([items[i].itemName, items[j].itemName]);
      }
    }
  };

  const selectBest = (elem) => {
    const elemIndex = items.findIndex((item) => item.itemName === elem.id);
    const siblingIndex = elem.nextSibling
      ? items.findIndex((item) => item.itemName === elem.nextSibling.id)
      : items.findIndex((item) => item.itemName === elem.previousSibling.id);

    let newArray = [...items];

    if (elem.nextSibling && elem.nextSibling.classList.contains('active')) {
      elem.nextSibling.classList.remove('active');
      elem.classList.add('active');
      newArray[elemIndex] = {
        ...newArray[elemIndex],
        score: newArray[elemIndex].score + 1,
      };
      newArray[siblingIndex] = {
        ...newArray[siblingIndex],
        score: newArray[siblingIndex].score - 1,
      };
    } else if (
      elem.previousSibling &&
      elem.previousSibling.classList.contains('active')
    ) {
      elem.previousSibling.classList.remove('active');
      elem.classList.add('active');

      newArray[elemIndex] = {
        ...newArray[elemIndex],
        score: newArray[elemIndex].score + 1,
      };
      newArray[siblingIndex] = {
        ...newArray[siblingIndex],
        score: newArray[siblingIndex].score - 1,
      };
    } else {
      elem.classList.add('active');
      newArray[elemIndex] = {
        ...newArray[elemIndex],
        score: newArray[elemIndex].score + 1,
      };
    }

    setItems(newArray);
  };

  createPairs(items);

  return (
    <div>
      {pairs.map((item, i) => (
        <div className='pair' key={i}>
          <button
            id={item[0]}
            onClick={(event) => selectBest(event.target)}
            className={`pair-btn`}
          >
            {item[0]}
          </button>
          <button
            id={item[1]}
            onClick={(event) => selectBest(event.target)}
            className={`pair-btn`}
          >
            {item[1]}
          </button>
        </div>
      ))}
    </div>
  );
}

export default Comparison;
