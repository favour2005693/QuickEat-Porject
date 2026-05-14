import { createContext, useContext, useState } from "react";
import QuickEatLoader from "../components/QuickEatLoader/QuickEatLoader";

const LoaderContext = createContext();

export const useLoader = () => useContext(LoaderContext);

export function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(false);

  const showLoader = () => setLoading(true);
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ showLoader, hideLoader }}>
      {loading && <QuickEatLoader />}
      {children}
    </LoaderContext.Provider>
  );
}