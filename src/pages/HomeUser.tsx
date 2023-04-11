import { useState, useEffect, useContext } from "react";
import axios from "axios";

type UserData = {
  birthDate: string;
  course: any;
  email: string;
  linkAuthorized: string;
  lunch: boolean;
  name: string;
  photoFile: string;
  userId: string;
};

export function HomeUser() {
  const [userData, setUserData] = useState<UserData>();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("logged") as string) as any;

    const token = data.token;
    axios
      .get("http://localhost:3000/api/v1/users/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData(res.data.message.returnData);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return userData ? (
    <>
    <a href="/oi">Voltar</a>
      <h1>Home User</h1>
      <p>Nome: {userData.name}</p>
      <p>Idade: {userData.birthDate}</p>
      <p>Curso: </p>
      <p>Almoço: {userData.lunch ? "Possui lanche HJ" : "Não possui lanche"}</p>
    </>
  ) : (
    <h1>Carregando...</h1>
  );
}
