import React from "react";
import  TextInput from "../components/TextInput";
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
  const [isSubmitting, setIsSubmittint] = useState(false);
  const dispatch = useDispatch();
  return (
    <section className="login-container">
      <section className="login-right-side">
        <h4 className="login-txt">Log in to your account</h4>
        <h5 className="login-txt">Welcome Back</h5>
        <form className="login-form">
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
          {
             isSubmitting ? <loading /> : <CustomButtom />
          }
        </form>
      </section>
      <section className="login-left-side"></section>
    </section>
  );
};

export default Login;
