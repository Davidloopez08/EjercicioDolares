import React, { useState } from 'react';
import './App.css';

const useCurrencyChangerState = (conversionRate, initialAmount) => {
  const [localAmount, setLocalAmount] = useState(parseFloat(initialAmount));

  const onInputChange = (value) => {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      setLocalAmount(parsedValue);
    }
  };

  const conversionRateNumber = parseFloat(conversionRate);
  const euros = localAmount / conversionRateNumber;
  const foreignCurrency = euros * conversionRateNumber;

  return { localAmount, euros, foreignCurrency, onInputChange };
};

const CurrencyChanger = ({ currencySymbol, change, initialValue }) => {
  const { localAmount, euros, foreignCurrency, onInputChange } = useCurrencyChangerState(change, initialValue);

  return (
    <div className="currency-container">
      <div className="input-container">
        {currencySymbol}:{' '}
        <input
          className="input-field"
          type="number"
          step="0.01"
          value={localAmount}
          onChange={(e) => onInputChange(e.target.value)}
        />{' '}
        {currencySymbol}
      </div>
      <div className="result-container">
        <div>Euros: {euros.toFixed(2)} €</div>
        <div>
          {currencySymbol === '$' ? 'Dólares' : currencySymbol === '£' ? 'Libras' : currencySymbol === '¥' ? 'Yen' : 'Otra Moneda'}:{' '}
          {foreignCurrency.toFixed(2)} {currencySymbol}
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <div className="app-container">
    <CurrencyChanger currencySymbol="$" initialValue={10} change={1.055925} />
    <CurrencyChanger currencySymbol="£" initialValue={15} change={0.8832} />
    <CurrencyChanger currencySymbol="¥" initialValue={2000} change={124.72} />
  </div>
);

export default App;
