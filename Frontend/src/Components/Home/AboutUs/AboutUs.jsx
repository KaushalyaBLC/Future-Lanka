import React from "react";
import "./AboutUs.css";
import Logo from "./logo.png";

const AboutUs = () => {
  return (
    <>
      <section className="AboutUs">
        <div className="container text-light p-3 pt-5">
          <h1>
            <span className="text-warning">What is Future Lanka</span> Research
            and <br />
            Development Foundation?
          </h1>

          <div className="col-12 mt-5 d-flex flex-column flex-lg-row">
            <div className="col-lg-3"></div>
            <div className=" col-lg-8 ">
              <h5> Empowering Careers, Transforming Lives!</h5>
              <p>
                Discover a world of possibilities with Future Lanka Foundation,
                where academics and industry professionals unite to guide you
                towards a successful career aligned with your passions and
                skills.
              </p>
              <h5 className="pt-3">Why Future Lanka Foundation?</h5>
              <ul>
                <li>
                  <b>Scientific Approach:</b> Unleash your potential through our
                  unique and scientific approach to career guidance.{" "}
                </li>
                <li>
                  <b> Unmatched Experiences:</b> Dive into transformative
                  experiences - from life coaching to corporate visits -
                  creating opportunities for your growth.{" "}
                </li>
                <li>
                  {" "}
                  <b>Industry Collaboration:</b> Benefit from our partnerships with
                  esteemed corporates and academic institutions, ensuring
                  unparalleled exposure.
                </li>
                <li>
                  {" "}
                 <b> Tailored Guidance:</b> As an independent entity, we assist you in
                  discovering the optimal academic path and higher education
                  provider for a seamless journey to success.
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
