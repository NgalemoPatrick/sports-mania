import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextInput, Loading, CustomButton } from "../components";
import { useForm } from "react-hook-form";
const ScoreBar = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSearch = async (data) => {};
  return (
    <section className="score-bar-container">
      <section className="score-bar">Score</section>
      <section className="search">
        Search
        <form className="search-form" onSubmit={handleSubmit(handleSearch)}>
          <TextInput placeholder="Search..." register={register("search")} />
          <CustomButton 
          title="Search" 
          type="submit"
          />
        </form>
      </section>
      <section className="body">Body</section>
    </section>
  );
};

export default ScoreBar;
