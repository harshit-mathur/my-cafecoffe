import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/cafe.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Coffee so good </h1>
        <p> your taste buds will love it. </p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
