import { createContext, useContext, useState, useEffect } from 'react';

const SalesContext = createContext();

export const SalesProvider = ({ children }) => {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('sales');
    if (saved) setSales(JSON.parse(saved));
  }, []);

  // context/SalesContext.jsx
  const addSale = async (newSale) => {
    try {
      const updatedSales = [...sales, { ...newSale, id: Date.now() }];
      await localStorage.setItem('sales', JSON.stringify(updatedSales));
      setSales(updatedSales);
    } catch (error) {
      console.error('Erro ao salvar venda:', error);
    }
  };

  const deleteSale = (id) => {
    const newSales = sales.filter(sale => sale.id !== id);
    setSales(newSales);
    localStorage.setItem('sales', JSON.stringify(newSales));
  };

  const calculateCommission = (value) => value * 0.007;

  const totalCommission = sales.reduce(
    (acc, sale) => acc + calculateCommission(sale.value),
    0
  );

  return (
    <SalesContext.Provider value={{ sales, addSale, deleteSale, totalCommission }}>
      {children}
    </SalesContext.Provider>
  );
};

export const useSales = () => useContext(SalesContext);