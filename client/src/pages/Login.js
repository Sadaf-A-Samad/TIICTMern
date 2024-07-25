import React from "react";

const Login = () => {
  return (
    <>
      <section id="formReg" className="formReg bg2">
        <div className="container">
          <form className="login" data-aos="fade-up">
            <div className="section-title">
              {/* <h2></h2> */}
              <p>Login Form</p>
            </div>
            <input type="text" placeholder="User Name" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
