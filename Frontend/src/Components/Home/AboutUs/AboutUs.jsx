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
          <div className=" col-12 pt-5">
            <div className="col-lg-12 text-center">
              <h3>- Our Vision -</h3>
              <p className="vision">
                “Empower the nation with sustainable & productive workforce”
              </p>
            </div>
          </div>
          <div className="col-12 mt-5 d-flex flex-column flex-lg-row">
            <div className=" col-lg-9 col-sm-12 ">
              <p className="aboutText ">
                Future Lanka Foundation is a dynamic alliance of academics and
                industry professionals dedicated to guiding students towards
                successful careers aligned with their passions and skills.
                Employing a unique and scientific approach, we empower students
                to comprehend their strengths and understand the evolving job
                market, facilitating informed and lucrative career decisions.
                Through transformative experiences like life coaching sessions,
                corporate visits, and internships, we create opportunities for
                students to thrive. Collaborating with esteemed corporates and
                academic institutions in Sri Lanka, we ensure unparalleled
                exposure for aspiring individuals. As an independent and
                unbiased entity, we assist students in discovering the optimal
                academic path and higher education provider that aligns
                seamlessly with their career aspirations and financial
                capacities. Join us at Future Lanka Foundation, where we craft
                opportunities and inspire success on the journey to a fulfilling
                career.
              </p>
            </div>
            <div className="col-lg-3 col-sm-12 text-center  ">
              <img src={Logo} alt="Future Lanka Logo" height={200} />
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
