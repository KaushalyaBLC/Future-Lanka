import React from "react";
import "./CareerExplore.css";

const CareerExplore = () => {
  return (
    <>
      <section className="careerExplore">
        <div className="container d-flex align-items-center wrapper p-4">
          <div className="col-12 d-flex">
            <div className="col-lg-8 col-sm-12 ">
              <h1 className=" exploreTitle">
                Discover the  <span className="text-success">Job Market</span>{" "}
              </h1>
              <p className="exploreText mt-3">
                Navigate the future of your career with our comprehensive Career
                Cluster Insights! Explore invaluable information about various
                career clusters, gain insights into emerging trends, and make
                informed decisions about your professional journey. Whether
                you're a job seeker or planning your next move, our curated
                database offers a roadmap to success within broad career
                categories. Ready to shape your path? Dive into the world of
                career clusters now – discover, plan, and thrive!"
              </p>
              <div className="exploreCTA">
                <button className="btn btn-outline-success mt-3 ">
                  Explore the Careers Now!
                </button>
              </div>
            </div>
            <div className="col-lg-4 "></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerExplore;
