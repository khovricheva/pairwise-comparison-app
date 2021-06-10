import React, { useState, useEffect } from 'react';
import './Entry.scss';

function Entry({ items, setItems }) {
  const [itemName, setItemName] = useState('');
  const [sorted, setSorted] = useState([]);
  const [maxItem, setMaxItem] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (items.some((item) => item.itemName === itemName)) {
      alert('Item already exists! Please enter a new item');
    } else if (itemName) {
      setItems((prev) => [
        ...prev,
        {
          itemName: itemName,
          score: 0,
        },
      ]);
    } else {
      alert('Item is empty! Please enter a full item');
    }

    setItemName('');
  };

  const handleChange = (event) => {
    setItemName(event.target.value);
  };

  useEffect(() => {
    setSorted([...items].sort((a, b) => (a.score > b.score ? -1 : 1)));
    setMaxItem(Math.max(...items.map((item) => item.score)));
  }, [items]);

  return (
    <div className='entry'>
      <form
        className='user-input'
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type='text'
          placeholder='New item'
          value={itemName}
          onChange={(event) => handleChange(event)}
        />
        <button type='submit' className='add-btn'>
          Add
        </button>
      </form>
      <div className='results'>
        <table>
          <tbody>
            {items.length > 0 && (
              <tr>
                <th>Item</th>
                <th>Score</th>
                <th></th>
              </tr>
            )}
            {sorted.map((item, i) => (
              <tr key={i}>
                <td>{item.itemName}</td>
                <td>{item.score}</td>
                {item.score > 0 && item.score === maxItem ? (
                  <td>
                    <span className='winner-tag'>Winner</span>
                  </td>
                ) : (
                  <td></td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Entry;
