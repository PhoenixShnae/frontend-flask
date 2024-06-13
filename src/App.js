import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [keyword, setKeyword] = useState('');
  const [selectedItem, setSelectedItem] = useState('');
  const [renderdata, setRenderData] = useState('');
  const [selection, setSelection] = useState('');

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value)
  }

  const handleCheckboxChange = (item) => {
    setSelectedItem(item);
  };

  const handleSelection = (choice) => {
    setSelection(choice);
  };

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 2', 'Item 3', 'Item 4', 'Item 2', 'Item 3', 'Item 4', 'Item 2', 'Item 3', 'Item 4'];
  const choices = ['Keyword', 'File']

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('http://localhost:5000/data', { key: keyword, check: selectedItem, chosen: selection })
    setRenderData(response.data)
    //setRenderData(JSON.stringify(response.data, null, 2))
  };

  return (
    <div className="App">
      <div style={{display:'inline-block', width:'40%', float:'left'}}>
        
        <form onSubmit={handleSubmit} >
          <h1>Input</h1>
          
        {/* Render checkboxes */}
        {choices.map((choice, index) => (
          <div key={index} >
            <input 
              type="checkbox"
              checked={selection === choice} // Set checked state based on selectedItem
              onChange={() => handleSelection(choice)} // Handle checkbox change
            />
            <label >{choice}</label>
          </div>
        ))}
          <input type='text' onChange={handleKeywordChange} value={keyword}></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>

      <h2>Checklist</h2>
      <div style={{ overflowY: 'scroll', maxHeight: '120px' , display:'inline-block', width:'50%', direction:'rtl'}}>
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
      <p style={{ whiteSpace: 'pre-line', border:'solid' }}> {renderdata}
      </p>
    </div>
  );
}

export default App;