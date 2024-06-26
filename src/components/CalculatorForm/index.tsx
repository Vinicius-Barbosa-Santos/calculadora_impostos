import React, { useState } from 'react';

interface CalculatorFormProps {
  onCalculate: (salary: number, isSimples: boolean) => void;
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ onCalculate }) => {
  const [salary, setSalary] = useState<number>(0);
  const [isSimples, setIsSimples] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onCalculate(salary, isSimples);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Remuneração Mensal Bruta Efetiva:</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(parseFloat(e.target.value))}
        />
      </div>
      <div>
        <label>Contratante é do Simples Nacional?</label>
        <select value={isSimples ? "sim" : "nao"} onChange={(e) => setIsSimples(e.target.value === "sim")}>
          <option value="sim">Sim</option>
          <option value="nao">Não</option>
        </select>
      </div>
      <button type="submit">Calcular</button>
    </form>
  );
};

export default CalculatorForm;
