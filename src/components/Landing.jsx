import React from "react";
import Undraw from "../assets/Undraw_Books.svg";
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <h1>South Africa's most awarded online library platform.</h1>
          <h2>
            Find your favourite book with{" "}
            <span className="green">Library.</span>
          </h2>
          <Link to="#features">
            <button className="btn">Browse Books</button>
          </Link>
          <figure className="header__img--wrapper">
            <img src={Undraw} alt=""/>
          </figure>
        </div>
      </header>
    </section>
  );
};

export default Landing;
