// src/components/SignUp.js
import React, { useState } from "react";
import { auth } from "../firebase";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const handleSignUp = () => {
    auth.createUserWithEmailAndPassword(email, password)
      .then((user) => console.log("User signed up:", user))
      .catch((error) => console.error("Error signing up:", error));
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
      <button onClick={handleSignUp}>Sign Up with Gmail</button>
    </div>
  );
}

export default SignUp;
