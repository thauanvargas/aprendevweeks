import React, { useState } from "react";
import { navigate } from "@reach/router";
import api from "../../services/api";

export default function Authentication() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await api
      .post("/login", { user, password })
      .then(() => navigate("/dashboard"))
      .catch(e => setError(e.response.data.error));
  }

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form onSubmit={handleSubmit}>
        <h1 style={{ textAlign: "center" }}>Login</h1>
        <input
          type="text"
          placeholder="Insira o User"
          value={user}
          onChange={e => {
            // setError("");
            setUser(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          placeholder="Insira a Password"
          value={password}
          onChange={e => {
            // setError("");
            setPassword(e.target.value);
          }}
        />
        <br />
        <input type="submit" value="Logar"></input>
        <br />
        <span id="error">{error}</span>
      </form>
    </div>
  );
}
