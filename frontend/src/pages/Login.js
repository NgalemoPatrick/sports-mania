import React from "react";

const Login = () => {
  return (
    <section className="login-container">
      <section className="login-right-side">
        <h4 className="login-txt">Log in to your account</h4>
        <h5 className="login-txt">Welcome Back</h5>
        <form className="login-form">
          <TextInput />
        </form>
      </section>
      <section className="login-left-side"></section>
    </section>
  );
};

export default Login;
