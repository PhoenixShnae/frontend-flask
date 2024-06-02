import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [keyword, setKeyword] = useState('');

  const handleKeywordChange = (event) => {
    setKeyword(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('/data',{key: keyword})
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>Input</h1>
        <input type='text' onChange={handleKeywordChange} value={keyword}></input>
        <br></br>
        <button type="submit">Submit</button>
      </form>

    </div>
  );
}

export default App;
