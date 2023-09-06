import React from "react";
import { TextInput, Loading, CustomButton } from "../components";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Register = () => {
  const {
    register,
    getValues,
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
        <h4 className="login-txt">Register form</h4>
        <h5 className="login-txt">Welcome to Sports Mania</h5>
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <TextInput
            name="firstname"
            label="First Name"
            placeholder=" First Name"
            type="text"
            register={register("firstmane", {
              required: "First Name is required!",
            })}
            error={errors.firstname ? errors.firstName?.message : ""}
          />
          <TextInput
            name="lastname"
            label="Last Name"
            placeholder=" First Name"
            type="text"
            register={register("lastmane", {
              required: "Last Name is required!",
            })}
            error={errors.lastname ? errors.firstName?.message : ""}
          />
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
          <TextInput
            name="password"
            label="Confirm Password"
            placeholder="Password"
            register={register("cPassword", {
              validate: (value) => {
                const { password } = getValues();
                if (password != value) {
                  return "Passwords do not match";
                }
              },
            })}
            error={
              errors.CPassword && errors.cPassword?.type === "validate"
                ? errors.cPassword?.message
                : ""
            }
          />

          {isSubmitting ? (
            <Loading />
          ) : (
            <CustomButton type="submit" title="Submit" />
          )}
        </form>
        <p className="don-have-acc">
          have an account?
          <Link to="/login" className="register-link">
            Login
          </Link>
        </p>
      </section>
      <section className="login-left-side"></section>
    </section>
  );
};

export default Register;
