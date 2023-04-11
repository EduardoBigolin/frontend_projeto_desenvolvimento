import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../context/auth";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export function Login() {
  const { login, isAuthenticated } = useContext(AuthContext);

  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  function to(path: string) {
    navigate(path);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // fetch api to login
    axios
      .post("http://localhost:3000/api/v1/users/login", userData)
      .then((res) => {
        console.log(res);
        login({ ...res.data.message.data, token: res.data.message.token });
        to("/oi");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
          placeholder="Password"
        />
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
