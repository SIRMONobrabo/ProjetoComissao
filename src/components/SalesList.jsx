import { useSales } from '../context/SalesContext';
import './styles/SalesList.css';

// components/SalesList.jsx
const SalesList = () => {{
  const { sales, deleteSale } = useSales();

  return (
    <div className="sales-list">
      <h3>Vendas</h3>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            <span>Venda #{sale.number}</span>
            <i></i>
            <span>R$ {sale.value.toFixed(2)}</span>
            <i></i>
            <button onClick={() => deleteSale(sale.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};


  // ... código do componente
};

export default SalesList; // Exportação padrão