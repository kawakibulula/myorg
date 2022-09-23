import { createContext } from "react";
import useLogin from "../hooks/useLogin";

export const thecontext = createContext();

export const ContextProvider = ({ children}) => {
  const login = useLogin()
  return (
    <thecontext.Provider
      value={{ ...login}}
    >
      {children}
    </thecontext.Provider>
  );
};