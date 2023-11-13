import { useState } from 'react';
import './App.css';

const EURO_DOLAR = 1.2;
//Aqui he puesto la diferencia entre el euro y el dolar

const CurrencyChanger = () => {
  //Aqui creo los dos Hooks que pides, uno para la gestion de los euros y otro para la gestion de los dolares.
  const [euros, setEuros] = useState(0);
  const [dolars, setDolars] = useState(0);

  const onChangeInput = (e) => {
    const newValue = e.target.value;
    setEuros(newValue);
    setDolars(newValue * EURO_DOLAR);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '50px' }}>
      <div>
        Euros: <input type="number" onChange={onChangeInput} value={euros} /> €
        Dólares: {dolars.toFixed(2)} $
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
