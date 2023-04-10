import { AuthContext } from "./context/auth";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Login } from "./pages/Login";
import App from "./App";
import React, { useState, useEffect } from "react";
import { PrivateRoute } from "./PrivateRoutes";
import { HomePage } from "./pages/HomePage";
export function RoutesWeb() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const logged = localStorage.getItem("logged");

    if (logged) {
      setIsAuthenticated(true);
      setLoading(false);
    }
    setLoading(false);
  }, []);

  const login = (userData: { name: string; email: string }) => {
    setIsAuthenticated(true);
    localStorage.setItem("logged", JSON.stringify(userData));
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("logged");
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <Router>
      <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/oi"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
        </Routes>
      </AuthContext.Provider>
    </Router>
  );
}
