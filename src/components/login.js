// src/components/Login.js
import React, { useState } from "react";
import { auth } from "../firebase";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    auth.signInWithEmailAndPassword(email, password)
      .then((user) => console.log("User logged in:", user))
      .catch((error) => console.error("Error logging in:", error));
  };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login with Gmail</button>
    </div>
  );
}

export default Login;
