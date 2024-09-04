import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";
import "./Jobmarket.css";
import { Link } from "react-router-dom";
import { CareerSearch } from "./CareerSearch";


const HigherEducation = () => {
  return (
    <>
      <Navigation />

      <div className="jobMarket col-12 bg-light">
        <h1 className="bg-success mt-3 p-3 text-light">Select the Preferred Industry</h1>
        <div className="container">
          <div className="d-lg-flex justify-content-center">
            <Link to={"./manufacturing"} className="col-lg-4 mx-2 manufacturing rounded d-flex justify-content-center align-items-center mt-3 text-decoration-none">
              <div className="text-center">
                <h1 className="text-light">Manufacturing</h1>
              </div>
            </Link>

            <Link to={"./healthcare"} className="col-lg-4 mx-2 healthcare rounded d-flex justify-content-center align-items-center mt-3 text-decoration-none">
              <div className="text-center">
                <h1 className="text-light">Health Care</h1>
              </div>
            </Link>

            <Link to={"./agriculture"} className="col-lg-4 mx-2 agriculture rounded d-flex justify-content-center align-items-center mt-3 text-decoration-none">
              <div className="text-center">
                <h1 className="text-light">Agriculture</h1>
              </div>
            </Link>
          </div>

          <div className="d-lg-flex justify-content-center">
            <Link to={"./it"} className="col-lg-4 mx-2 it rounded d-flex justify-content-center align-items-center mt-3 text-decoration-none">
              <div className="text-center">
                <h1 className="text-light">IT</h1>
              </div>
            </Link>

            <Link to={"./automobile"} className="col-lg-4 mx-2 automobile rounded d-flex justify-content-center align-items-center mt-3 text-decoration-none">
              <div className="text-center">
                <h1 className="text-light">Automobile</h1>
              </div>
            </Link>

            <Link to={"./construction"} className="col-lg-4 mx-2 construction rounded d-flex justify-content-center align-items-center my-3 text-decoration-none">
              <div className="text-center">
                <h1 className="text-light">Construction</h1>
              </div>
            </Link>
          </div>
        </div>
        <CareerSearch/>
      </div>
      <Footer />
    </>
  );
};

export default HigherEducation;
