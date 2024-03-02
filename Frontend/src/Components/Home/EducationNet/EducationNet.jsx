import React from "react";
import "./EducationNet.css";

const EducationNet = () => {
  return (
    <>
      <section className="educationNet">
        <div className="container d-flex align-items-center wrapper p-4">
          <div className="col-12 d-flex">
            <div className="col-lg-4 "></div>
            <div className="col-lg-8 col-sm-12 text-light ">
              <h1 className=" educationTitle ">
                <span className="educationHighlight text-warning">Academic</span> Networking
              </h1>
              <p className="educationText mt-3">
                Navigate the intricacies of higher education confidently with
                our Education Networking initiative. We link students to a
                myriad of programs across Sri Lanka, spanning government,
                semi-government, private universities, and vocational
                institutions. This collaborative platform provides the support
                needed to make informed decisions about your academic path. Join
                our Education Networking community for a guided and empowered
                journey through the diverse landscape of higher education.
              </p>
              <div className="educationCTA mt-4">
                <button className="btn btn-outline-warning ">
                  Unlock Your Higher Education Journey Now!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EducationNet;
