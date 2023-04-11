import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth";

import React, { useState, useEffect, useContext } from "react";
export function HomePage() {
  const { logout, isAdmin } = useContext(AuthContext);
  const userData = JSON.parse(localStorage.getItem("logged") as string) as any;
  console.log(userData);

  return (
    <div>
      <button onClick={() => logout()}>Deslogar</button>
      <h1>Welcome {userData.name}</h1>
      <ul>
        <li>
          <Link to={"/home"}>View Home</Link>
        </li>
        {userData.isAdmin ? (
          <>
            <li>
              <Link to={"/listAll"}>ListUser</Link>
            </li>
            <li>
              <Link to={"/createNew"}>Cadastro novo user</Link>
            </li>
          </>
        ) : null}
      </ul>
    </div>
  );
}
