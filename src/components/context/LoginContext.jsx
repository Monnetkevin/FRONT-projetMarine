import { createContext, useContext, useEffect, useState } from "react";
import auth from "../auth/Token";
import { API_FUNCTION } from "../../utils/RouteApi";

const LoginContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(auth.getExpiryTime());
  const [user, setUser] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const contextValue = {
    isConnected,
    setIsConnected,
    user,
    setUser,
    isLoaded,
    setToken,
    token,
  };
  useEffect(() => {
    if (!isConnected && token) {
      API_FUNCTION.currentUser().then((res) => setUser(res));
      setIsConnected(true);
      setIsLoaded(true);
    }
  }, [token, isConnected]);

  return (
    <LoginContext.Provider value={contextValue}>
      {children}
    </LoginContext.Provider>
  );
};

export const useAuth = () => useContext(LoginContext);
