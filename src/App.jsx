import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { SalesProvider } from './context/SalesContext';
import Header from './components/Header';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Sales from './pages/Sales';
import AddSale from './pages/AddSale';

function App() {
  return (
    <Router>
      <AuthProvider>
        <SalesProvider>
          <Header />
          <main className="container">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/vendas" element={<Sales />} />
              <Route path="/nova-venda" element={<AddSale />} />
            </Routes>
          </main>
        </SalesProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;