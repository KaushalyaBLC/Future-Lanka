import React from "react";
import "./PassionIdentify.css";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const PassionIdentify = () => {
  return (
    <>
      <section className="passionIdentify">
        <div className="container d-flex align-items-center wrapper p-4">
            <div className="col-12 d-flex">
                <div className="col-lg-4 ">
                    
                </div>
          <div className="col-lg-8 col-sm-12 text-light ">
            <h1 className=" passionTitle">Identify Your <span className="titleHighlight">Skills and Passion</span> </h1>
            <p className="passionText mt-3">
              Revolutionize your career path with our AI-powered Skill and
              Passion Identifier! Discover your unique strengths and passions in
              minutes, as our intelligent system crafts a personalized roadmap
              to your dream career. Don't just job hunt, let our innovative tool
              guide you towards a profession that aligns with your true calling.
              Try it now – because your career success story begins with
              self-discovery
            </p>
            <div className="passionCTA mt-3">
              <Link to={'./passionId'}>
            <button className="btn btn-outline-warning">Identify Your Potential Now!</button>
            </Link>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PassionIdentify;
