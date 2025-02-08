import { createContext, useState } from 'react';

// 1) Crear el contexto
const LoginContext = createContext();

// 2) Crear el provider
export const LoginProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const logout = () => setUser(null);
  const login = () => setUser({ name: 'Jhon Doe' });

  return (
    <LoginContext.Provider value={{ login, logout, user }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContext;
