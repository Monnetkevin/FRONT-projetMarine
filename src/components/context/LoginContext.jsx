import { createContext, useContext, useEffect, useState } from "react";
import auth from "../auth/Token";
import { API_FUNCTION } from "../../utils/RouteApi";

const LoginContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(auth.getToken());
  const [user, setUser] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (token) {
      API_FUNCTION.currentUser().then((res) => setUser(res));
      setIsConnected(true);
      setIsLoaded(true);
    }
  }, [token, isConnected]);
  console.log(user);

  return (
    <LoginContext.Provider
      value={{ isConnected, setIsConnected, user, isLoaded, setToken, token }}
    >
      {children}
    </LoginContext.Provider>
  );
};

export const useAuth = () => useContext(LoginContext);
