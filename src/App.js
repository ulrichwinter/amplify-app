import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify'
import { withAuthenticator, AmplifySignOut} from '@aws-amplify/ui-react'
import logo from './logo.svg';
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
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <h1>Hello from AWS Amplify</h1>
      <AmplifySignOut />

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

export default withAuthenticator(App);
