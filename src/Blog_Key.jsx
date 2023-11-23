import { createContext, useState, useContext } from "react";

const AuthContext = createContext({
  user: null,
  errorMessage: null,
  login: () => {},
  logout: () => {},
});

const Blog_Key = "Blog_Key";

export default function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    localStorage.getItem(Blog_Key) ?? null
  ); 
  const [errorMessage, setErrorMessage] = useState(null);

  function login({ email, password }) {
    console.log(email);
    console.log(password);
    if (email === "infinityrentals@gmail.com" && password === "Infinity2023") {
      setUser({ email });
      localStorage.setItem(Blog_Key, email);
      setErrorMessage(null);
    }
    setErrorMessage("Email o contraseña incorrectos");
  }
  
  function logout() {
    localStorage.removeItem(Blog_Key); 
    setUser(null); 
  }

  const value = {
    user, 
    errorMessage,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
  return useContext(AuthContext);
}
