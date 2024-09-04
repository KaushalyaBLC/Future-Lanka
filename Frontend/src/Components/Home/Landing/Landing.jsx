import React from "react";
import "./Landing.css";
import Navigation from "../../Navigation/Navigation";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import Social from "./Social";

const Landing = () => {
  return (
    <>
    <Navigation/>
      <section className="landing col-12 ">
        <div className="container">
          <div className="d-flex align-items-center  flex-column flex-lg-row hero">
            <div className="col-lg-8 col-sm-12 text-light mobile">
              <h1 className="title">
                <span className="titleHighlight">Career</span> Pathfinder
              </h1>

              <p className="landingParagraph mt-3">
                Welcome to Career Pathfinder – Sri Lanka's premier AI-powered
                digital career guidance platform! We empower students to
                discover their passions, harness their abilities, and make
                informed decisions for a successful future. Join us and
                experience the cutting edge of career guidance, where advanced
                AI technology meets self-discovery and knowledge.{" "}
                <span className="paragraphHighlight">
                  Your journey to success starts now!
                </span>
              </p>

              <div className="mt-4 ctaButton">
                <Link as={Link} to="/">
                  <button className=" p-2 rounded btn btn-outline-warning ">
                    Explore Your Future Now
                  </button>
                </Link>
                <Social />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
