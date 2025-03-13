// src/pages/Sales.jsx
import { Link } from 'react-router-dom';
import SalesList from '../components/SalesList'; // Importação padrão

const Sales = () => {
  return (
    <div className="sales-page">
      <div className="page-header">
        <h2>Histórico de Vendas</h2>
        <Link to="/nova-venda" className="new-sale-button">
          + Nova Venda
        </Link>
      </div>
      
      <SalesList />
    </div>
  );
};

export default Sales;