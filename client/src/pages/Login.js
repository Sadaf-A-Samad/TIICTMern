import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { setUserInfo } = useContext(UserContext);

  async function login(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });
    if (response.ok) {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
        setRedirect(true);
      });
      // alert("Login Successfull");
    } else {
      alert("Login Failed! Wrong Credentials...");
    }
  }

  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <>
      <section id="formReg" className="formReg bg2" onSubmit={login}>
        <div className="container">
          <form className="login" data-aos="fade-up">
            <div className="section-title">
              <p>Login Form</p>
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
            <button>Login</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
