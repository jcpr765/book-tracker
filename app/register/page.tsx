"use client";
import { useState } from "react";

const register = async (email: string, password: string) => {
  const resp = await fetch("/api/register", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const { error, id, email: returnedEmail } = await resp.json();

  console.log(error, id, email);
};

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        register(email, password);
      }}
    >
      <input
        className="text-blue-600"
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className="text-blue-600"
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <input type="submit" value="Register" />
    </form>
  );
};

export default Register;