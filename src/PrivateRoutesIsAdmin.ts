import React, { useContext, useEffect } from "react";
import { AuthContext } from "./context/auth";
import { useNavigate } from "react-router-dom";

export const PrivateRouteIsAdmin = ({ children }: any) => {
  const navigate = useNavigate();
  const { isAuthenticated, isAdmin } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      const data = JSON.parse(localStorage.getItem("logged") as string) as any;
      const isAdmin = data.isAdmin;
      if (!isAdmin) {
        navigate("/oi");
      }
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? children : null;
};
