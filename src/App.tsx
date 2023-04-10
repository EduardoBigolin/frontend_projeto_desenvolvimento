import { useState } from "react";
import { Link } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Link to="/login">Login</Link>
      <br />
      <Link to="/cadastro">Cadastro</Link>
    </div>
  );
}

export default App;
