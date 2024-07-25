import React from "react";

const Register = () => {
  return (
    <>
      <section id="formReg" className="formReg bg2">
        <div className="container">
          <form className="register" data-aos="fade-up">
            <div className="section-title">
              {/* <h2>Contact</h2> */}
              <p>Register</p>
            </div>
            <input type="text" placeholder="User Name" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;
