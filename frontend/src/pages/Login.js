import React from "react";
import { TextInput, Loading, CustomButton } from "../components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = async (data) => {};

  const [isSubmitting, setIsSubmittint] = useState(false);
  const dispatch = useDispatch();
  return (
    <section className="login-container">
      <section className="login-right-side">
        <h4 className="login-txt">Log in to your account</h4>
        <h5 className="login-txt">Welcome Back</h5>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name="email"
            placeholder="email@exampla.com"
            label="Email Address"
            type="email"
            register={register("email", {
              required: "Email Address is Required",
            })}
            error={errors.email ? errors.email?.message : ""}
          />
          <TextInput
            name="password"
            label="Password"
            placeholder="Password"
            register={register("password", {
              required: "password is required",
            })}
            error={errors.password ? errors.password?.message : ""}
          />
          <Link to="reset-pwd" className="reset-pwd">
            Forgot password?
          </Link>
          {isSubmitting ? (
            <Loading />
          ) : (
            <CustomButton type="submit" title="Login" />
          )}
        </form>
        <p className="don-have-acc">
          Don't have an account?
          <Link to="/register" className="register-link">
            Create Account
          </Link>
        </p>
      </section>
      <section className="login-left-side"></section>
    </section>
  );
};

export default Login;
