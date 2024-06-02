import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [keyword, setKeyword] = useState('');
  const [selectedItem, setSelectedItem] = useState('');

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value)
  }

  const handleCheckboxChange = (item) => {
    setSelectedItem(item);
  };

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/data', { key: keyword , check: selectedItem})
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Input</h1>
        <input type='text' onChange={handleKeywordChange} value={keyword}></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>

      <div>
      <h2>Checklist</h2>
      {/* Render checkboxes */}
      {items.map((item, index) => (
        <div key={index}>
          <input
            type="checkbox"
            checked={selectedItem === item} // Set checked state based on selectedItem
            onChange={() => handleCheckboxChange(item)} // Handle checkbox change
          />
          <label>{item}</label>
        </div>
      ))}
    </div>
    </div>
  );
}

export default App;
