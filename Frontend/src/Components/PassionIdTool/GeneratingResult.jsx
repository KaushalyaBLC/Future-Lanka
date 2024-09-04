import React from "react";
import AI from "./aibot.gif";

const GeneratingResult = ({ name }) => {
  return (
    <>
      <section className="vh-100  d-flex align-items-center justify-content-center  ">
        <div className="container ">
          <div className="d-flex justify-content-center">
            <img src={AI} alt="Aibot image" className="img-fluid" width={350} />
          </div>
          <div className="text-center">
            <h5 >
              Please wait <span className="text-success"> {name},</span>
              </h5><h5> <span className="text-success">CareerWizard</span> is Generating Your Results...
            </h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default GeneratingResult;
