import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const savedUser =
      localStorage.getItem('frontcastUser') ||
      sessionStorage.getItem('frontcastUser');

    return savedUser ? JSON.parse(savedUser) : null;
  });

  const login = (username, rememberMe) => {
    const userData = { username };

    if (rememberMe) {
      localStorage.setItem('frontcastUser', JSON.stringify(userData));
      sessionStorage.removeItem('frontcastUser');
    } else {
      sessionStorage.setItem('frontcastUser', JSON.stringify(userData));
      localStorage.removeItem('frontcastUser');
    }

    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('frontcastUser');
    sessionStorage.removeItem('frontcastUser');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}