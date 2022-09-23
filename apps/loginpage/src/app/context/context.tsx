import { createContext } from "react";
import useLoginForm from "../hooks/useLogin";

export const context = createContext({});

export const ContextProvider = ({ children}) => {
  const login = useLoginForm()
  return (
    <context.Provider
      value={{ ...login}}
    >
      {children}
    </context.Provider>
  );
};