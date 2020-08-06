import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify'
import './App.css';

function App() {
  const [input, updateInput] = useState({limit: 5, start: 0});
  const [coins, updateCoins] = useState([]);

  function updateInputValues(type, value)
  {
    updateInput({...input, [type]: value});
  }  
  async function fetchCoins() {
    const {limit, start} = input;
    const data = await API.get('cryptoapi', `/coins?limit=${limit}&start=${start}`)
    updateCoins(data.coins);
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="App">
      <h1>Hello from AWS Amplify</h1>

      <input 
        onChange={e => updateInputValues('limit', e.target.value)} 
        placeholder="limit"
        type="number"
      />
      <input 
        onChange={e => updateInputValues('start', e.target.value)} 
        placeholder="start"
        type="number"
      />

      <button onClick={fetchCoins}>Fetch Coins</button>

      <h2>Available Cryptocurrencies</h2>
      {
        coins.map((coin, index) => (
        <div key={index}>
          <h3>{coin.name} - {coin.symbol}</h3>
          <h5>${coin.price_usd}</h5>
        </div>
        ))
      }
    </div>
  );
}

export default App;
