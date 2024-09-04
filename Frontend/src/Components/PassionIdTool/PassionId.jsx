import React from "react";
import Navigation from "../Navigation/Navigation";
import "./PassionId.css";
import { useState } from "react";
import AI from "./aibot.gif";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const PassionId = () => {
  return (
    <section className="passionId">
      <Navigation />
      <div className="container pt-5 pb-5 d-lg-flex ">
        <div className="col-lg-6 text-center">
          <h1>
            Hello, <span className="text-success">I'm CareerWizard! </span>{" "}
          </h1>
          <p className="text-center">
            Your personal AI powered digital career counsellor
          </p>
          <div className="d-flex justify-content-center">
            <img src={AI} alt="" className="img-fluid" width={400} />
          </div>
        </div>
        <div>
          <div className="bg-success rounded-3 text-light p-5">
            <h5>
              Embark on a transformative journey of self-discovery with
              me.
            </h5>
            <ul className="">
              <li>
                <b>Uncover Your Passions:</b> Explore your deepest interests
                with tailored questions.
              </li>
              <li>
                <b>Identify Your Skills:</b> Discover your unique strengths
                through intuitive analysis.
              </li>
              <li>
                <b>Personalized Career Recommendations:</b> Get career
                suggestions that align with your passions and skills.
              </li>
              <li>
                <b>Navigate Your Path:</b> Let our bot guide you to a fulfilling
                and purposeful life.
              </li>
              <li>
                <b>Start Your Journey:</b> Experience self-discovery and
                professional alignment today!
              </li>
            </ul>
            <div className="text-center">
            <Link to={"./test"} className="">
                  <button
                    className="btn btn-light"
                    onClick={() => setstate("q1")}
                  >
                    Let's Start!
                  </button>
                </Link>
                </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default PassionId;
