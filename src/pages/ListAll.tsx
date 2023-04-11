import axios from "axios";
import { useEffect, useState } from "react";

const ListAll = () => {
  const [userData, setUserData] = useState([]);
  console.log(userData);

  const data = JSON.parse(localStorage.getItem("logged") as string) as any;
  const token = data.token;
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/users/list", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setUserData(res.data.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  function editUser(id: string) {
    console.log(id);
  }

  function deleteUser(id: string) {
    axios
      .delete(`http://localhost:3000/api/v1/users/del/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      });
  }

  return userData ? (
    <>
      <a href="/oi">Voltar</a>
      <h1>List All</h1>
      <table border="1px">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Data de Nasciomento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user: any) => {
            return (
              <tr key={user._id}>
                <td>
                  <p>Nome: {user.name}</p>
                </td>
                <td>
                  <p>{user.birthDate}</p>
                </td>
                <td>
                  <button onClick={() => editUser(user.id)}>Editar</button>
                  <button onClick={() => deleteUser(user.id)}>Deletar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  ) : (
    <h1>Carregando...</h1>
  );
};

export default ListAll;
