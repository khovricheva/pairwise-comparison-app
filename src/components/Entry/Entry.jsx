import React, { useState, useEffect } from 'react';
import Comparison from '../Comparison/Comparison';

function Entry() {
  const [itemName, setItemName] = useState('');
  const [items, setItems] = useState([]);
  const [sorted, setSorted] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!items.includes(itemName)) {
      setItems((prev) => [
        ...prev,
        {
          itemName: itemName,
          score: 0,
        },
      ]);
    } else {
      alert('Item already exists! Please enter a new item');
    }
    setItemName('');
  };

  const handleChange = (event) => {
    setItemName(event.target.value);
  };

  useEffect(() => {
    setSorted([...items].sort((a, b) => (a.score > b.score ? -1 : 1)));
  }, [items]);

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type='text'
          value={itemName}
          onChange={(event) => handleChange(event)}
        />
        <input type='submit' value='Add' />
      </form>
      <div className='table'>
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
                {item.score > 0 && i === 0 ? <td>Winner!</td> : <td></td>}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Comparison items={items} setItems={setItems} />
    </div>
  );
}

export default Entry;
