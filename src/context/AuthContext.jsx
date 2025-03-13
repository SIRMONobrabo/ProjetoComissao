import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

// context/AuthContext.jsx
const login = async (username, password) => {
  try {
    // Simulação de API com timeout
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (username === 'vendedor' && password === '1234') {
      setUser({ username });
      localStorage.setItem('user', JSON.stringify({ username }));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Erro no login:', error);
    return false;
  }
};

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => useContext(AuthContext);