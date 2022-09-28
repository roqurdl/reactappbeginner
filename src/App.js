import { useState, useEffect } from "react";

function App() {
  const API_URL = `https://api.coinpaprika.com/v1/tickers`;

  const [loading, setloading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(1);
  const [pay, setPay] = useState(1);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setloading(false);
      });
  });
  const onChange = (e) => {
    setPay(e.target.value);
  };
  const onSelect = (e) => {
    setPrice(e.target.value);
    setPay(1);
  };
  return (
    <div>
      <h1>The Coin{loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select id="coin" onChange={onSelect}>
          {coins.map((coin) => (
            <option value={coin.quotes.USD.price} key={coin.id}>
              {coin.name}({coin.symbol}): ${coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <div>
        <label htmlFor="pay">How much USD you have?</label>
        <input type="number" id="pay" min="1" onChange={onChange} value={pay} />
      </div>
      <h2>You can get {pay / price}BTC</h2>
    </div>
  );
}

export default App;
