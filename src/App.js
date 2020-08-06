import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify'
import './App.css';

function App() {
  const [coins, updateCoins] = useState([]);

  async function fetchCoins() {
    const data = await API.get('cryptoapi', '/coins')
    updateCoins(data.coins);
  }

  useEffect(() => {
    fetchCoins();
  }, []);

  return (
    <div className="App">
      <h1>Hello from AWS Amplify</h1>

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
