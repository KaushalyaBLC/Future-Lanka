import React from "react";
import "./AboutUs.css";
import Logo from "./logo.png";

const AboutUs = () => {
  return (
    <>
      <section className="AboutUs">
        <div className="container text-light p-3 pt-5">
          <h1>
            <span className="text-warning">What is </span> Career Pathfinder?
          </h1>

          <div className="col-12 mt-5 d-flex flex-column flex-lg-row">
            <div className="col-lg-3"></div>
            <div className=" col-lg-8 ">
              <h5> Sri Lanka's Premier Digital Career Guidance Provider</h5>
              <p>
                At Career Pathfinder, we empower students to discover their
                passions, embrace their abilities, and make informed decisions
                for success. Join us in crafting futures with knowledge and
                self-discovery. Your journey to success starts here!
              </p>
              <h5 className="pt-3">Why Career Pathfinder?</h5>
              <ul>
                <li>
                  <b>Skill & Passion Identification: </b> Uncover your true
                  calling with expert guidance.{" "}
                </li>
                <li>
                  <b> Career Exploration:</b> Delve into our expansive career
                  database to align your passions with potential career paths.{" "}
                </li>
                <li>
                  {" "}
                  <b>Higher Education Networking:</b> Navigate the landscape of
                  higher education with confidence.
                </li>
                <li>
                  {" "}
                  <b> Soft-Skill Development: </b>Enhance essential skills for
                  career success.
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center col-12 mt-4">
            <button className="btn btn-outline-primary">Read More</button>
            <button className="btn btn-outline-warning ms-3">Contact Us</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
