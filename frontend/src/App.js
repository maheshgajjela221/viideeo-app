import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1> MYHUB  tech viideeo application automation.</h1>
      <p>{msg}</p>
    </div>
  );
}

export default App;
