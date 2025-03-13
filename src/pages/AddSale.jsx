// src/pages/AddSale.jsx
import { useNavigate } from 'react-router-dom';
import SalesForm from '../components/SalesForm';

const AddSale = () => {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/vendas'); // Redireciona após cadastro
  };

  return (
    <div className="add-sale-page">
      <div className="page-header">
        <h2>Registrar Nova Venda</h2>
        <button onClick={() => navigate(-1)} className="back-button">
          Voltar
        </button>
      </div>
      
      <SalesForm onSuccess={handleSuccess} />
    </div>
  );
};

export default AddSale;