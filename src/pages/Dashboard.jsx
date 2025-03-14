import { Link } from 'react-router-dom';
import { useSales } from '../context/SalesContext';
import './styles/Dashboard.css';

const Dashboard = () => {
  const { totalCommission, sales } = useSales();

  return (
    <div className="dashboard-page">
      <h1>Seu Desempenho</h1>
      
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Vendas no Mês</h3>
          <p>{sales.length}</p>
        </div>

        <div className="stat-card highlight">
          <h3>Comissão Total</h3>
          <p>R$ {totalCommission.toFixed(2)}</p>
        </div>

        <div className="stat-card">
          <h3>Ticket Médio</h3>
          <p>R$ {(sales.reduce((acc, sale) => acc + sale.value, 0) / sales.length || 0).toFixed(2)}</p>
        </div>
      </div>

      <div className="quick-actions">
        <h3>Ações Rápidas</h3>
        <div className="action-buttons">
          <Link to={"/nova-venda"}>
            <button className="action-button">Nova Venda</button>
          </Link>
          <Link to={"/vendas"}>
            <button className="action-button">
              Histórico
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;