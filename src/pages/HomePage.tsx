import { AuthContext } from "../context/auth";

import React, { useState, useEffect, useContext } from "react";
export function HomePage() {
  const { logout } = useContext(AuthContext);
  const userData = JSON.parse(localStorage.getItem("logged") as string) as any;
  return (
    <div>
      <button onClick={() => logout()}>Deslogar</button>
      <h1>Welcome {userData.name}</h1>
    </div>
  );
}
