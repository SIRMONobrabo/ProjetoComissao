// src/components/Header.jsx
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo">
          <Link to="/">Sistema de Comissões</Link>
        </div>
        
        {user && (
          <div className="nav-links">
            <Link to="/dashboard" className="nav-link">Dashboard</Link>
            <Link to="/vendas" className="nav-link">Vendas</Link>
            <Link to="/nova-venda" className="nav-link">Nova Venda</Link>
            
            <div className="user-info">
              <span>Usuário: {user.username}</span>
              <button onClick={handleLogout} className="logout-button">
                Sair
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;