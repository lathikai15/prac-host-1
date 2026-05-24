import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  // 🔹 GET data
  const loadData = async () => {
    const res = await axios.get("https://prac-host-1.onrender.com/users");
    setData(res.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  // 🔹 ADD user
  const addUser = async () => {
    await axios.post("https://prac-host-1.onrender.com/users", {
      name,
      email,
    });
    setName("");
    setEmail("");
    loadData();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Simple React CRUD</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />

      <button onClick={addUser}>Add User</button>

      <hr />

      {data.map((item) => (
        <div key={item.id}>
          {item.name} - {item.email}
        </div>
      ))}
    </div>
  );
}

export default App;