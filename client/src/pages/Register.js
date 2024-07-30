import React, { useState } from "react";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      alert("Registration Successfull");
    } else {
      alert("Registration Failed");
    }
  }

  return (
    <>
      <section id="formReg" className="formReg bg2">
        <div className="container">
          <form className="register" data-aos="fade-up" onSubmit={register}>
            <div className="section-title">
              <p>Register</p>
            </div>
            <input
              type="text"
              placeholder="User Name"
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
            />
            <button>Register</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
