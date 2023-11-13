import { useState } from 'react';
import './App.css';

const EURO_DOLAR = 1.2;
// Esto es la cantidad de euros en dolares

const useCurrencyChangerState = () => {
  const [euros, setEuros] = useState(0);
  const [dolars, setDolars] = useState(0);

  const onInputChange = (value, inputType) => {
    if (inputType === 'euros') {
      setEuros(value);
      setDolars(value * EURO_DOLAR);
    } else if (inputType === 'dolars') {
      setDolars(value);
      setEuros(value / EURO_DOLAR);
    }
  };

  return { euros, dolars, onInputChange };
};

const CurrencyChanger = () => {
  const { euros, dolars, onInputChange } = useCurrencyChangerState();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px' }}>
      <div>
        Euros: <input style={{ width: '150px' }} type="number" step="0.01" value={euros} onChange={(e) => onInputChange(e.target.value, 'euros')} /> €
      </div>
      <div>
        Dólares: <input style={{ width: '150px' }} type="number" step="0.01" value={dolars} onChange={(e) => onInputChange(e.target.value, 'dolars')} /> $
      </div>
    </div>
  );
};

const MyApp = () => {
  return (
    <div>
      <CurrencyChanger />
    </div>
  );
};

export default MyApp;
