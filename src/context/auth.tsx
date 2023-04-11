import React, { createContext } from "react";
interface AuthContextType {
  isAuthenticated: boolean;
  login: (userData: { name: string; email: string }) => void;
  logout: () => void;
  loading: boolean;
  isAdmin: boolean;
}
export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: null as any,
  isAdmin: false,
  loading: null as any,
  login: () => {},
  logout: () => {},
});
