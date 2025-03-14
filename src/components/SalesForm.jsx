// SalesForm.jsx
import { useState } from 'react';
import { useSales } from '../context/SalesContext';
import './styles/SalesForm.css';

const SalesForm = () => {
  const [sale, setSale] = useState({ number: '', value: '' });
  const { addSale } = useSales();

  const handleSubmit = (e) => {
    e.preventDefault();
    addSale({
      number: sale.number,
      value: parseFloat(sale.value)
    });
    setSale({ number: '', value: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="Número da Venda"
        value={sale.number}
        onChange={(e) => setSale({...sale, number: e.target.value})}
      />
      <input
        type="number"
        step="0.01"
        placeholder="Valor (R$)"
        value={sale.value}
        onChange={(e) => setSale({...sale, value: e.target.value})}
      />
      <button type="submit">Adicionar Venda</button>
    </form>
  );
};

export default SalesForm; // Exportação padrão
