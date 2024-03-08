import React from "react";
import Navigation from "../Navigation/Navigation";
import "./PassionId.css";
import { useState } from "react";
import Robotimage from "./robot.png";
import { Link } from "react-router-dom";

const PassionId = () => {
  
    return (
      <section className="passionId">
        <Navigation />
        <div className="container pt-5 pb-5 text-light">
          <h1>Welcome to AI Powered <span className="text-warning">Skill & Passion Identification Bot</span></h1>
          <div className="row mt-5">
            <div className="col-lg-9 text">
              <p>
                Embark on a transformative journey of self-discovery with our
                innovative tool. Answer some thoughtfully crafted questions to
                uncover your passions, skills, and interests. Our intuitive
                analysis will guide you towards a clearer understanding of your
                unique strengths. But that's not all receive personalized career
                recommendations based on your identified passions and skills. We
                don't just stop at self-discovery; we pave the way for you to
                align your career with what truly excites and motivates you.
              </p>
              <ul className="col-10">
                <li>
                  <b>Uncover Your Passions:</b> Answer some tailored questions to
                  explore your deepest interests.
                </li>
                <li>
                  <b>Identify Your Skills:</b> Discover your unique strengths
                  and talents through our intuitive analysis.
                </li>
                <li>
                  <b>Personalized Career Recommendations:</b> Receive insightful
                  suggestions aligning your passions and skills with potential
                  career paths.
                </li>
                <li>
                  <b>Navigate Your Path:</b> Let Skill & Passion Identification Bot be your guide
                  to a more fulfilling and purposeful life.
                </li>
                <li>
                  <b>Start Your Journey:</b> Embark on a transformative
                  experience of self-discovery and professional alignment.
                </li>
              </ul>
              <div className="text-center mt-5">
                <Link to={"./test"}>
                  <button
                    className="btn btn-outline-warning"
                    onClick={() => setstate("q1")}
                  >
                    Let's Start!
                  </button>
                </Link>
              </div>
            </div>
            <div className="col-3 text-center">
              <img src={Robotimage} width={200} />
            </div>
          </div>
        </div>
      </section>
    );
  
};

export default PassionId;
