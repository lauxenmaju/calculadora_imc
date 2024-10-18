import React, { useState } from 'react';
import ReactDOM from 'react-dom';
<link rel="stylesheet" href="/src/index.css"></link>

const InputField = ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};


const Result = ({ imc }) => {
  if (!imc) {
    return null;
  }

  let category = '';
  if (imc < 18.5) {
    category = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc < 24.9) {
    category = 'Peso normal';
  } else if (imc >= 25 && imc < 29.9) {
    category = 'Sobrepeso';
  } else {
    category = 'Obesidade';
  }

  return (
    <div>
      <h3>Seu IMC: {imc.toFixed(2)}</h3>
      <p>Classificação: {category}</p>
    </div>
  );
};


const App = () => {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);

  const calcularIMC = () => {
    if (peso && altura) {
      const alturaEmMetros = altura / 100;
      const imcCalculado = peso / (alturaEmMetros * alturaEmMetros);
      setImc(imcCalculado);
    }
  };

  return (
    <div>
      <h1>Calculadora de IMC</h1>
      <InputField label="Peso (kg): " value={peso} onChange={setPeso} />
      <InputField label="Altura (cm): " value={altura} onChange={setAltura} />
      <button onClick={calcularIMC}>Calcular IMC</button>
      <Result imc={imc} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
