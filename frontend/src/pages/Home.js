import React from "react";
import { useSelector } from "react-redux";
import {ScoreBar} from '../components'

const Home = () => {
  const { user } = useSelector((state) => state.user);
  return <section className="home-container">
    <ScoreBar />
  </section>;
};

export default Home;
