import React from "react";
import "./Landing.css";
import Navigation from "../Navigation/Navigation";
import Logo from '../Navigation/logo.png'
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <section className="landing col-12 ">
        <Navigation />
        <div className="container">
          <div className="d-flex align-items-center  flex-column flex-lg-row hero">
            <div className="col-lg-7 col-sm-12 text-light mobile">
              <h1 className="title">
                <span className="titleHighlight">Future Lanka</span> Research and
                Development Foundation
              </h1>
              <p className="landingParagraph mt-3">
                Welcome to Future Lanka Research & Development Foundation – Sri
                Lanka's only full-fledge career guidance provider! We empower
                students to discover passions, embrace abilities, and make
                informed decisions for success. Join us, where we craft futures
                with knowledge and self-discovery. <span className="paragraphHighlight">Your journey to success
                starts now!</span>
              </p>
              <div className="mt-4 ctaButton">
              <Link as={Link} to="/">
              <btn className=" p-2 rounded btn btn-outline-warning ">Explore Your Future Now</btn>
              </Link>
              </div>
            </div>
            <div className="">
               
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
