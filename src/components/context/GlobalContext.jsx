import { createContext, useContext, useEffect, useState } from "react";
import { API_FUNCTION } from "../../utils/RouteApi";

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [events, setEvents] = useState([]);
  const [comments, setComments] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (isLoaded === false) {
      API_FUNCTION.products().then((res) => {
        setProducts(res);
      });
      API_FUNCTION.comments().then((res) => {
        setComments(res);
      });
      API_FUNCTION.events().then((res) => {
        setEvents(res);
      });
      setIsLoaded(true);
    }
  }, [isLoaded]);

  return (
    <GlobalContext.Provider
      value={{
        products,
        setProducts,
        events,
        setEvents,
        comments,
        setComments,
        isLoaded,
        setIsLoaded,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
