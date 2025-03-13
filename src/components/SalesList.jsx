import { useSales } from '../context/SalesContext';

// components/SalesList.jsx
const SalesList = () => {{
  const { sales, deleteSale } = useSales();

  return (
    <div className="sales-list">
      <h3>Histórico de Vendas</h3>
      <ul>
        {sales.map((sale) => (
          <li key={sale.id}>
            <span>Venda #{sale.number}</span>
            <span>R$ {sale.value.toFixed(2)}</span>
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