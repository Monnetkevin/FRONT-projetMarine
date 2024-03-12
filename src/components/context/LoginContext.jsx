import { createContext, useContext, useEffect, useState } from "react";
import auth from "../auth/Token";

const LoginContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    if (auth.logged()) {
      try {
        setIsConnected(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      setIsConnected(false);
    }
  }, [isConnected]);

  return (
    <LoginContext.Provider value={{ isConnected }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useAuth = () => useContext(LoginContext);
