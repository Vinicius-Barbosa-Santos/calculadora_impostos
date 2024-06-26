import React, { useState } from 'react';
import CalculatorForm from './components/CalculatorForm';
import ResultDisplay from './components/ResultDisplay';
import { calculateCLT, calculatePJ, calculateAutonomo } from './utils/Calculations';
import { CalculationResults } from './interface/CalculationResults';
import './styles.css';

const App: React.FC = () => {
  const [cltResults, setCltResults] = useState<CalculationResults | null>(null);
  const [pjPresumidoResults, setPjPresumidoResults] = useState<CalculationResults | null>(null);
  const [pjSimplesResults, setPjSimplesResults] = useState<CalculationResults | null>(null);
  const [autonomoResults, setAutonomoResults] = useState<CalculationResults | null>(null);

  const handleCalculate = (salary: number, isSimples: boolean) => {
    const clt = calculateCLT(salary);
    const pjPresumido = calculatePJ(salary, false);
    const pjSimples = calculatePJ(salary, isSimples);
    const autonomo = calculateAutonomo(salary);

    setCltResults(clt);
    setPjPresumidoResults(pjPresumido);
    setPjSimplesResults(pjSimples);
    setAutonomoResults(autonomo);
  };

  return (
    <div className="App">
      <h1>Calculadora CLT x PJ x Autônomo</h1>
      <CalculatorForm onCalculate={handleCalculate} />
      {cltResults && pjPresumidoResults && pjSimplesResults && autonomoResults && (
        <ResultDisplay
          clt={cltResults}
          pj={pjPresumidoResults}
          autonomo={autonomoResults}
          pjSimples={pjSimplesResults}
        />
      )}
    </div>
  );
};

export default App;
