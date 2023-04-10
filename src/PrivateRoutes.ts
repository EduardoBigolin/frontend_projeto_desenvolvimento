import React, { useContext, useEffect } from "react";
import { AuthContext } from "./context/auth";
import { useNavigate } from "react-router-dom";

export const PrivateRoute = ({ children }: any) => {
  const navigate = useNavigate();
  const { isAuthenticated, loading } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};
